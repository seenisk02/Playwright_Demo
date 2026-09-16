import {test , expect, Locator } from "@playwright/test"
test("WindowHandling",async({page,context})=>{
await page.goto("https://qaplayground.com/practice");
await page.getByAltText("Tabs & Windows icon").click();
const popuppage = page.waitForEvent('popup');
await page.locator("#tw-tab-a").click();
await page.locator("#tw-tab-b").click();
await page.locator("#tw-tab-c").click();


 
  const childpage = await popuppage;
await childpage.waitForLoadState();
const pages = context.pages();

let wikipage;
for(const currentpage of pages){
console.log(currentpage.url())

if(currentpage.url().includes("practice")){

wikipage = currentpage;
break;
}

}
if(wikipage){
wikipage.bringToFront();
console.log(wikipage.url())

}


})