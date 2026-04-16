const { test, expect } = require('@playwright/test');

test('First test case', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://google.com');

    // Example action
    console.log(await page.title());
});

test('page playwrite test' , async ({page})=>
{
await page.goto('https://google.com');
console.log(await page.title());
await expect(page).toHaveTitle("Google");
});