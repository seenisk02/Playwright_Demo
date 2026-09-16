import {test , expect, Locator } from "@playwright/test"
test("WindowHandling",async({page,context})=>{
await page.goto("https://testautomationpractice.blogspot.com/");


const row = page.locator("//table[@name='BookTable']//tr");
//const column = page.locator("//table[@name='BookTable']//tr[2]/td");
const column = page.locator("//table[@name='BookTable']//th");
const r = await row.count();
const c = await column.count();

console.log(r);
console.log(c);

// for (let i = 0; i < await row.count(); i++) {
//     const cols = row.nth(i).locator("td");
//     let rowData = [];

//     // Loop through columns
//     for (let j = 0; j < await cols.count(); j++) {
//       rowData.push(await cols.nth(j).innerText());
//     }
//     console.log(rowData.join("|"));
// }


for(let i = 1; i<=await row.count();i++){

    const column1 = row.nth(i).locator("td");
    const column2 = await column1.nth(0).innerText();

    if(column2 == "Learn Selenium"){

        const author = await column1.nth(1).innerText();
        console.log(column2+","+author);
        break;
    }
   
 
}
// for(let i=0; i <= r ; i++){
//    for(let j =0; j <= c ; j++){
// const count = await page.locator("//table[@name='BookTable']//tr["+i+"]/td["+j+"]").innerText();
// console.log(count);
//    }
   
// }


  // Locate all rows in BookTable (skip header row)
//   const rows = page.locator("//table[@name='BookTable']//tr");
//   const rowCount = await rows.count();

//   let total = 0;

//   for (let i = 1; i < rowCount; i++) {   // start at 1 to skip header
//     const cols = rows.nth(i).locator("td");

//     // Price column is the 4th column (index 3)
//     const priceText = await cols.nth(3).innerText();
//     const price = parseInt(priceText);   // convert string to number

//     total += price;
 // }
})