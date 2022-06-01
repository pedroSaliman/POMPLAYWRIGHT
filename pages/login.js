const { page } = require("./base");
const Base= require("./base");
class Login extends Base{

constructor(page){
    super(page);
    this.username="#Email";
    this.pass="#Password";
    this.btn="button[type='submit']";
    this.logout="//a[normalize-space()='Logout']";
}



async info(theusername,thepassword){

    await this.page.fill(this.username,'');
   await this.page.fill(this.username,theusername);

   await this.page.fill(this.pass,'');

   await this.page.fill(this.pass,thepassword);

   await this.page.click(this.btn);
   await this.page.click(this.logout);
}


}
module.exports=Login;