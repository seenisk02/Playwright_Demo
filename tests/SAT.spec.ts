import {test , expect, Locator } from "@playwright/test"

test("iframe",async({page,context})=>{


await page.goto("https://www.leafground.com/frame.xhtml");


const frame1 = await page.frameLocator("//iframe[@src='default.xhtml']")
await frame1.locator("#Click").click();

const frame2 =await page.frameLocator("//iframe[@src='page.xhtml']").frameLocator("//iframe[@src='framebutton.xhtml']");
await frame2.locator("#Click").click();



})
// await page.goto("https://testautomationpractice.blogspot.com/");
// const popuppage = page.waitForEvent('popup');
//  await page.locator(".wikipedia-search-wiki-link").click();
//   await page.locator(".wikipedia-search-wiki-link").click();
//  await page.locator(".wikipedia-search-wiki-link").click();
//   const childpage = await popuppage;
// await childpage.waitForLoadState();
// const p1 = context.pages();

// let wikipage;
// for(const currentpage of p1){
// console.log(currentpage.url())

// if(currentpage.url().includes("Wikipedia")){

// wikipage = currentpage;
// break;
// }

// }
// if(wikipage){
// wikipage.bringToFront();
// console.log(wikipage.url())

// }

// })


// const dropd:Locator =page.getByLabel("Country:");

// await dropd.selectOption({ index : 6});
// await page.getByPlaceholder("Enter Name").fill("Seenivasan");
// await page.getByPlaceholder("Enter Name").press("Tab");
// await page.getByPlaceholder("Enter EMail").fill("123@gmail.com");
// await page.getByPlaceholder("Enter EMail").press("Tab");
// await page.getByPlaceholder("Enter Phone").type("dfssdfsdf");
// await page.getByPlaceholder("Enter Phone").selectText();
// await page.getByPlaceholder("Enter Phone").clear();

// await page.locator("#textarea").focus();
// await page.locator("#textarea").fill("dsfjkld");
// await page.locator("#textarea").blur();
// await page.locator("#textarea").fill("dsfjkld");

// await page.getByText("Monday").click();

// await page.locator("#field1").dblclick();

// await page.getByRole('checkbox', { name: 'Wednesday' }).check();
// await page.getByRole('checkbox', { name: 'Thursday' }).check();
// await page.getByRole('checkbox', { name: 'Thursday' }).uncheck();

// await page.getByRole('button',{ name : 'Submit' }).first().hover();


// const drop : Locator = await page.getByRole("combobox",{name : "Country:"});

// await drop.selectOption({index : 5 })
// // const drop1 : Locator = await page.getByRole("combobox",{name : "Country:"});
// // await drop1.selectOption({index: 10})
// // await drop.selectOption({value: "India"})

// await page.getByLabel("Colors:").selectOption(['Green','Yellow']);

// //await page.locator("#singleFileInput").hover();
// await page.locator("#singleFileInput").scrollIntoViewIfNeeded();

// await page.locator("#singleFileInput").setInputFiles("data/app.html");

// await page.locator("#draggable > p").dragTo(page.locator("#droppable> p"));

// await page.screenshot({path:"data/app1.png"});

// await page.goto('https://testautomationpractice.blogspot.com/');

// page.on('dialog', async alerts=>{

// console.log(alerts.message());
// console.log(alerts.type())
// await alerts.accept("Fita");

// })
// await page.locator("#promptBtn").click();


// const popuppage = page.waitForEvent('popup');

// page.locator(".wikipedia-search-wiki-link").click();

// const childpage = await popuppage;

// await childpage.waitForLoadState();
// await page.waitForTimeout(3000);
// console.log(await childpage.url());
// console.log(await childpage.title());

// //await childpage.close();
// await page.bringToFront();

// await page.getByPlaceholder("Enter Name").fill("Seenivasan");

// const newpage = [];
//  for(let i =1;i<=10;i++){
//  const popuppage = page.waitForEvent('popup');
//  page.locator(".wikipedia-search-wiki-link").click();
//   const childpage = await popuppage;

//   await childpage.waitForLoadState();
// newpage.push(childpage);

//  }

// const jump = newpage[7];
// await jump.bringToFront();
// console.log(await jump.title());
// await page.waitForTimeout(3000);
// const jump1 = newpage[5];
// await jump1.bringToFront();
// console.log(await jump1.title());