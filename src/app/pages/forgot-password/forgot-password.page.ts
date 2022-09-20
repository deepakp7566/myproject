import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  constructor() {}
  email;
  usermail;
  passwordnew
  password;
  isshow=false;
  isPassChange=false
  // newPass;

  submit() {
    const newpass=this.passwordnew

    // let newpassword = this.newPass;
    let getArray: any = [];
    getArray = localStorage.getItem('signup');
    if (getArray) {
      getArray = JSON.parse(getArray);
      console.log('getarry', getArray);
    }
    for (let i = 0; i < getArray.length; i++) {
      let newmail = getArray[i].Email;
      if (this.usermail === newmail) {
        this.password = getArray[i].Password;
        getArray[i].password=this.passwordnew
        console.log('password', this.password);
        this.isPassChange=true
      }
       else {
        alert('details not match');
      }
      if (this.usermail) {
        alert('your password is' + this.password);
      }
   
      
    }
    if(this.isPassChange){
      localStorage.setItem('signUp',JSON.stringify(getArray))
    }

    this.isshow=true
  }
  create(){

  }
  ngOnInit() {}
}
