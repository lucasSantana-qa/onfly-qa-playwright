import { Locator } from "@playwright/test";
import { HomePage } from "../support/home.page";
import { ProductDetailsPage } from "../support/product-details.page";

export async function parseAmount(locator: Locator) {
    //remove o símbolo monetario para focar apenas no valor
    return (await locator.innerText()).replace('$', '')
}

export async function addProductToCart(homePage: HomePage, productDetailsPage: ProductDetailsPage, productName: string) {
    await homePage.searchProduct(productName)
    await homePage.selectProduct(productName)
    await productDetailsPage.addToCart()
}