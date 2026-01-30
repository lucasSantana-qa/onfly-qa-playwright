import { Page } from "@playwright/test";

export class ProductDetailsPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async addToCart() {
        await this.page.locator('#btn-add-to-cart').click()
    }

    get cartCount() {
        return this.page.locator('#lblCartCount')
    }
}