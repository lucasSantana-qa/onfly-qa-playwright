import { Locator } from "@playwright/test";

export async function parseAmount(locator: Locator) {
    //remove o símbolo monetario para focar apenas no valor
    return (await locator.innerText()).replace('$', '')
}