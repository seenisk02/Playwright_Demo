import * as XLSX from "xlsx";
import {test , expect } from './Fixture.spec' 
// Load workbook
// const workbook = XLSX.readFile("");

// // Select sheet
// const sheet = workbook.Sheets["Sheet1"];

// // Convert sheet to JSON
// const data = XLSX.utils.sheet_to_json(sheet);

// console.log(data);


test('Dashboard validation', async({ loginpage})=>{

    expect(loginpage.getByRole('heading', {name : 'Dashboard'})).toBeVisible();

    console.log("Dashboard login Success");




})