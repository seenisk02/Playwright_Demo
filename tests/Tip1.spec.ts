import { test } from "@playwright/test";
import * as XLSX from "xlsx";
//npm install xlsx
test("Login using Excel data", async ({ page,context }) => {
  // Read Excel
  // const workbook = XLSX.readFile("data/userpass.xlsx");
  // const sheet = workbook.Sheets["Sheet1"];
  // const data: any[] = XLSX.utils.sheet_to_json(sheet);

  // for (const row of data) {
  //   await page.goto("https://www.facebook.com/");

  //   await page.fill("#_R_1h6kqsqppb6amH1_", row.Username);
  //   //await page.locator("#username").fill(row.Username);
  //   await page.fill("#_R_1hmkqsqppb6amH1_", row.Password);
  //   await page.click("//span[text()='Log in']");

  // }

const result = [

  {
    Username : "User60",Password : "Pass60", UserStatus :"Active"
  },{
    Username : "User61",Password : "Pass61", UserStatus :"InActive"
  }
]

//Json to sheet
const Worksheet = XLSX.utils.json_to_sheet(result);

const workbook1 = XLSX.utils.book_new();

XLSX.utils.book_append_sheet(workbook1,Worksheet,"Sheet1")

XLSX.writeFile(workbook1,"data/newfile.xlsx");

console.log("File Created")


})
