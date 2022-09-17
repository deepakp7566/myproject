import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email;
  password;
  list: any = [];
  islog = false;
  constructor(public router: Router, public route: ActivatedRoute) {}
  ForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
  login() {
    const objArray = localStorage.getItem('signup');
    let listArray: any = [];
    const data = {
      Email: this.email,
      Password: this.password,
    };
    console.log('datas', data);
    if (objArray) {
      listArray = JSON.parse(objArray);
      for (let i = 0; i < listArray.length; i++) {
        const mail = listArray[i].Email;
        const password = listArray[i].Password;
        if (mail == this.email && password == this.password) {
          this.islog = true;
          listArray = listArray[i];
        }
      }
    }
    if (this.islog) {
      localStorage.setItem('login', JSON.stringify(listArray));

      this.router.navigate(['/profile'], {
        queryParams: {
          value: JSON.stringify(listArray),
        },
      });
      this.islog = false;
    } else {
      alert('Invalid details');
    }
  }

  ngOnInit() {}
}
