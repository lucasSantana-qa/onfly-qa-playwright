import { test, expect } from "@playwright/test";
import { UserModel } from "./fixtures/user.model";
import data from './fixtures/user-data.json'
import { LoginPage } from "./support/login.page";
import { MyAccountPage } from "./support/my-account.page";
import { HomePage } from "./support/home.page";
import { ProductDetailsPage } from "./support/product-details.page";
import { CartPage } from "./support/cart.page";
import * as Helpers from '././helpers/helpers'

const productName = 'Pliers'

test.describe('Testes carrinho', { tag: '@cart' }, () => {
  let loginPage: LoginPage
  let myAccountPage: MyAccountPage
  let homePage: HomePage
  let productDetailsPage: ProductDetailsPage
  let cartPage: CartPage

  test.beforeEach(async ({ page }) => {
    //url do sistema está configurado no baseUrl no arquivo de configuração
    await page.goto('/')

    const user = data.valid_user as UserModel
    loginPage = new LoginPage(page)
    myAccountPage = new MyAccountPage(page)
    homePage = new HomePage(page)
    productDetailsPage = new ProductDetailsPage(page)
    cartPage = new CartPage(page)

    await homePage.goToSignin()
    await loginPage.login(user.email, user.password)
    await myAccountPage.goToHome()
    await homePage.inputSearchProduct.waitFor({state: "visible"})
  })
  test('Deve adicionar produto no carrinho com sucesso', async () => {
    await Helpers.addProductToCart(homePage, productDetailsPage, productName)
    await expect(productDetailsPage.cartCount).toHaveText('1')
  })

  test('Deve validar o valor total do carrinho', async () => {
    await homePage.searchProduct(productName)
    const productAmount = await homePage.productAmount(productName)
    await homePage.selectProduct(productName)
    await productDetailsPage.addToCart()
    await homePage.goToCart()
    const cartAmount = await cartPage.getCartAmount()
    expect(cartAmount).toEqual(productAmount)
  })

  test('Deve remover produto do carrinho com sucesso', async () => {
    await Helpers.addProductToCart(homePage, productDetailsPage, productName)
    await homePage.goToCart()
    await cartPage.removeProductFromCart()
    await expect(cartPage.cartProductTable).not.toBeVisible()
    await expect(cartPage.cartEmptyMessage).toHaveText('The cart is empty. Nothing to display.')
  })
})
