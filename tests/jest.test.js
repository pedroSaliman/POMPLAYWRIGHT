const {chromium,devices} = require("playwright");
const Login = require("../pages/login");
describe("suite",()=>{
 jest.setTimeout(300000);   

let browser=null;
let page=null;
let context=null;
let home=null;
beforeAll(async()=>{
  browser= await chromium.launch({headless:false});

  context=await browser.newContext({
    recordVideo:{
      dir:"./recordvideos",
      
  

    },

  });
  await      context.tracing.start({ screenshots: true, snapshots: true });
  



  page= await context.newPage();
  home=  new Login(page);
  await home.navigate();
    
    });
    test('this is first test', async() => {
        
       
    await home.info("admin@yourstore.com","admin");
    await context.tracing.stop({ path: 'trace.zip' });

    });
   

});
