import { expect, test, Locator, chromium  } from "@playwright/test";

test("Validate functions",async({page})=>{
const browser = await chromium.launch({ headless: false });

  // 2. Create isolated BrowserContext (like incognito)
  const context1 = await browser.newContext(); // User 1
  const context2 = await browser.newContext();
  const context3 = await browser.newContext();
  const context4 = await browser.newContext();
  const context5 = await browser.newContext(); // User 2

  // 3. Open Pages (tabs) inside contexts
  const page1 = await context1.newPage();
  const page2 = await context2.newPage();
  const page3 = await context3.newPage();
  const page4 = await context4.newPage();
  const page5 = await context5.newPage();

  // Navigate each page independently
  await page1.goto('https://testautomationpractice.blogspot.com/');
   await page1.getByPlaceholder("Enter Name").fill("123@gmail.comhasdksadsadhkasjdkashdkjhakskhd");
   
  await page2.goto('https://testautomationpractice.blogspot.com/');
  await page2.getByPlaceholder("Enter Name").fill("123@gmail.comhasdksadsadhkasjdkashdkjhakskhd");
  await page3.goto('https://testautomationpractice.blogspot.com/');
  await page3.getByPlaceholder("Enter Name").fill("123@gmail.comhasdksadsadhkasjdkashdkjhakskhd");
  await page4.goto('https://testautomationpractice.blogspot.com/');
  await page4.getByPlaceholder("Enter Name").fill("123@gmail.comhasdksadsadhkasjdkashdkjhakskhd");
  await page5.goto('https://testautomationpractice.blogspot.com/');
  await page5.getByPlaceholder("Enter Name").fill("123@gmail.comhasdksadsadhkasjdkashdkjhakskhd");

  // Assertions
  await expect(page1).toHaveTitle("Automation Testing Practice");
  await expect(page2).toHaveURL('https://www.leafground.com/waits.xhtml');
  await expect(page3).toHaveURL('https://www.leafground.com/waits.xhtml');
  await expect(page4).toHaveURL('https://www.leafground.com/waits.xhtml');
  await expect(page5).toHaveURL('https://www.leafground.com/waits.xhtml');

  // Close browser
  //await browser.close();

})