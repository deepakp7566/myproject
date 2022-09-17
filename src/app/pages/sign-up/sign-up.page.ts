import { Component, OnInit } from '@angular/core';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  constructor() {}
  email;
  password;
  mobile;
  gender;
  isLogin = false;
  Signup() {
    let list: any = [];

    const data = {
      Email: this.email,
      Password: this.password,
      Mobile: this.mobile,
      Gender: this.gender,
    };
    const objArray = localStorage.getItem('signup');
    if (objArray) {
      list = JSON.parse(objArray);
    }
    debugger;
    for (let i = 0; i < list.length; i++) {
      if (list[i].Email === this.email) {
        this.isLogin = true;
      }
    }
    if (this.isLogin) {
      alert('alredy exsist');
      this.isLogin = false;
    } else {
      list.push(data);
    }

    localStorage.setItem('signup', JSON.stringify(list));
  }

  ngOnInit() {}
}
