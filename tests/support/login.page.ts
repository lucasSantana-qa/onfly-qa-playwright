import { Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async login(email: string, password: string) {
        await this.page.locator('#email').fill(email)
        await this.page.locator('#password').fill(password)
        await this.page.locator('input[value=Login]').click()
    }
}