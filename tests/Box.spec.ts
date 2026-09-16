import {test , expect, Locator } from "@playwright/test"
test("WindowHandling",async({page,context})=>{
 await page.goto("https://www.leafground.com/frame.xhtml");


 const frame1 = page.frameLocator("//iframe[@src='default.xhtml']");
  await frame1.locator("#Click").click();


  const nestedFrame = page.frameLocator("iframe[src='page.xhtml']")
                           .frameLocator("iframe[src='framebutton.xhtml']");
   await nestedFrame.locator("#Click").click();


    const frames = page.frames();
  console.log("Total frames:", frames.length);

  for (const frame of frames) {
    console.log("Frame URL:", frame.url());
  }
})

// import { test } from "@playwright/test";

// test("IframeHandling", async ({ page }) => {
//   await page.goto("https://www.leafground.com/frame.xhtml");

//   // Get all frames
//   const frames = page.frames();
//   console.log("Total frames:", frames.length);

//   // Find frame by URL
//   const frameByUrl = page.frame({ url: /default.xhtml/ });
//   if (frameByUrl) {
//     await frameByUrl.locator("#Click").click();
//   }

//   // Find frame by Name (if iframe has name attribute)
//   const frameByName = page.frame({ name: "frame2" });
//   if (frameByName) {
//     await frameByName.locator("#Click").click();
//   }
// });


// toBeVisible() → Element is visible

// toBeHidden() → Element is hidden

// toBeEnabled() / toBeDisabled() → Input/button state

// toHaveText() → Matches exact text

// toContainText() → Matches partial text

// toHaveValue() → Input field value

// toHaveAttribute() → DOM attribute check