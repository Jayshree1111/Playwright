const {test ,expect }=require('@playwright/test');
const { getMaxListeners } = require('cluster');
const { text } = require('node:stream/consumers');
test('@web Login test' ,async ({page}) =>{
    const productName = 'ZARA COAT 3';
    const email =  "panchanijayshree1@gmail.com";

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Cucumber2@");
    await page.locator("[value='Login']").click();

    await page.waitForLoadState('networkidle');

    const products = page.locator(".card-body");

    // ✅ wait for products
    await page.locator(".card-body b").first().waitFor();

    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);

    const count = await products.count();

    for (let i = 0; i < count; ++i) {
        const text = await products.nth(i).locator("b").textContent();

        if (text.trim() === productName) {
            await products.nth(i).locator("text=Add To Cart").click();
            break;
        }
    }

 
    await page.locator("[routerlink*='cart']").click();

    await page.waitForLoadState('networkidle');

    await expect(page.locator(`h3:has-text("${productName}")`)).toBeVisible();
    await page.locator("text=checkout").click();
    await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 150 });
    const dropdown =page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount= await dropdown.locator("button").count();
    for(let i=0; i<optionsCount; i++)
    {
        const text =await dropdown.locator("button").nth(i).textContent();
        if(text===" India")
        {
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
    expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
  
  
    for (let i = 0; i < await rows.count(); ++i) {
       const rowOrderId = await rows.nth(i).locator("th").textContent();
       if (orderId.includes(rowOrderId)) {
          await rows.nth(i).locator("button").first().click();
          break;
       }
    }
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(orderId.includes(orderIdDetails)).toBeTruthy();
  

});



test('@web pop child window handle', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const userName = page.locator('#username');
    const documentLink = page.locator("[href*='documents-request']");

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        documentLink.click(),
    ]);

    await newPage.waitForLoadState();

    // ✅ get text correctly
    const text = await newPage.locator(".red").textContent();

    // ✅ extract email domain
    const arraytext = text.split("@");
    const domain = arraytext[1].split(" ")[0];

    // ✅ fill in parent page
    await userName.fill(domain);

    console.log(await userName.inputValue());
});