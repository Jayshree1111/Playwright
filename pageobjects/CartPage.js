const { expect } = require('@playwright/test');

class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItems = page.locator(".cartSection h3"); // correct locator
        this.checkout = page.locator("text=Checkout");
    }

    async VerifyProductIsDisplayed(productName) {

        await this.page.waitForLoadState('networkidle');
        await this.cartItems.first().waitFor(); // wait for cart items

        const titles = await this.cartItems.allTextContents();
        console.log("Cart products:", titles);

        const isPresent = titles.some(p =>
            p.trim().toLowerCase().includes(productName.toLowerCase())
        );

        expect(isPresent).toBeTruthy();
    }

    async Checkout() {
        await this.checkout.waitFor();
        await this.checkout.click();
    }
}

module.exports = { CartPage };