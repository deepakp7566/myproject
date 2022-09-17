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

  // newPass;

  submit() {
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
        let password = getArray[i].Password;
        console.log('password', password);
      } else {
        alert('details not match');
      }
      if (this.usermail) {
        alert('your password is' + this.usermail);
      }
    }
  }
  ngOnInit() {}
}
