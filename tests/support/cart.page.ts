import { Page } from "@playwright/test";
import * as Helpers from '../helpers/helpers'

export class CartPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async getCartAmount() {
        return await Helpers.parseAmount(this.page.locator('span[data-test=line-price]'))
    }

    async removeProductFromCart() {
        await this.page.locator('a[class="btn btn-danger"]').click()
    }

    get cartProductTable() {
        return this.page.locator('table[class="table table-hover"]')
    }

    get cartEmptyMessage() {
        return this.page.locator('//app-cart/p')
    }
}