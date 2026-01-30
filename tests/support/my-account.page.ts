import { Page } from "@playwright/test";

export class MyAccountPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async goToHome() {
        await this.page.locator('#Layer_1').click()
    }
}