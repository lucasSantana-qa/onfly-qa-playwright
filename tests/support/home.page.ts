import { Locator, Page } from "@playwright/test";
import * as Helpers from '../helpers/helpers'

export class HomePage {
    readonly page: Page
    readonly inputSearchProduct: Locator

    constructor(page: Page) {
        this.page = page
        this.inputSearchProduct = this.page.locator('#search-query')
    }

    async goToSignin() {
        await this.page.getByText('Sign in').click()
    }

    async goToCart() {
        await this.page.locator('a[data-test=nav-cart]').click()
    }

    async searchProduct(product: string) {
        await this.inputSearchProduct.fill(product)
        await this.page.locator('button[type="submit"]').click()
    }

    async selectProduct(product: string) {
        // seletor baseado no nome do produto para evitar dependência de ordem
        await this.page.locator(`//h5[text()=" ${product} "]`).click()
    }

    async productAmount(product: string) {
        return await Helpers.parseAmount(this.page.locator(`//h5[text()=" ${product} "]/../following-sibling::div//span[@data-test="product-price"]`))
    }
}