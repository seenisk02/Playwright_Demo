import {test , expect, Locator} from "@playwright/test"


//fill

test("Validate functions",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
await page.reload
    await page.getByPlaceholder("Enter Name").fill("123@gmail.comhasdksadsadhkasjdkashdkjhakskhd");
    await page.getByPlaceholder("Enter Name").selectText();

    await page.keyboard.press("Tab");

    await page.getByPlaceholder("Enter EMail").type("123@gmail.comhasdksadsadhkasjdkashdkjhakskhd");
    await page.getByPlaceholder("Enter EMail").clear()
    await page.locator("#field1").hover();
await page.locator("#field1").dblclick();
//await page.getByRole('button',{name : "Submit"}).hover();
await page.locator(".submit-btn").first().hover();

await page.getByPlaceholder("Enter Phone").focus();
await page.getByPlaceholder("Enter Phone").blur();
await page.locator("#monday").check();
await page.locator("#tuesday").check();
await page.locator("#monday").uncheck();

// const drop :Locator = await page.getByRole('combobox',{name: "Country:"})

// //await drop.selectOption({index : 6})
// await drop.selectOption({label : "Brazil"});

//const multidrop : Locator = await page.getByRole('combobox',{name: "Colors:"});
const multidrop : Locator =await page.locator("#colors");
await multidrop.selectOption(["Red","Blue","Green"])
    //await page.locator(".wikipedia-search-wiki-link").click();

   await page.locator("#singleFileInput").setInputFiles("data/app.html");
   await page.locator("#singleFileInput").screenshot({path :"data/seeni.png"});
const drag : Locator =await page.locator("#draggable").first();
const drop : Locator =await page.locator("#droppable").first();
await drag.dragTo(drop);
})
