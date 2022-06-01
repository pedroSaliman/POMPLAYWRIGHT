class  Base{

constructor(page){
this.page=page;
}
async navigate(){
    await this.page.goto("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F");
}


}
module.exports=Base;