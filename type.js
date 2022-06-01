// const {chromium} = require("playwright");
// const Login = require("./pages/login");


// (async()=>{

// const browser= await chromium.launch({headless:false});
// const page=await browser.newPage();
// let home=new Login(page);
// home.navigate();
// await home.info("tomsmith","SuperSecretPassword!");


// await page.goto("https://the-internet.herokuapp.com/login");
// const username= await page.$("#username");

// await username.type("tomsmith",{delay:50});
// const pass= await page.$("#password");
// await pass.fill("SuperSecretPassword!");
// const btn=await page.$("button[type='submit']");
// await btn.click();
// })();