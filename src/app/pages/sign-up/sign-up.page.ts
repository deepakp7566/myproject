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
  passName=false;
  totalEmail="";

  Save(){
    let list: any = [];
    const data = {
   EMAIL: this.email,
   PASSWORD: this.password,
   MOBILE: this.mobile,
   GENDER: this.gender,
    }
   const saveArry = localStorage.getItem('savedata');
if (saveArry){
list = JSON.parse(saveArry);
};
  for(let i = 0; i< list.length; i++){
     this. totalEmail=list[i].EMAIL
  }

    list.push(data);
    localStorage.setItem('savedata',JSON.stringify(list));
  }
  // Signup() {

    
  //   let list: any = [];

  //   const data = {
  //     Email: this.email,
  //     Password: this.password,
  //     Mobile: this.mobile,
  //     Gender: this.gender,
  //   };
  //   const objArray = localStorage.getItem('signup');
  //   if (objArray) {
  //     list = JSON.parse(objArray);
  //   }
  //   debugger;
  //   for (let i = 0; i < list.length; i++) {
  //     if (list[i].Email === this.email) {
  //       this.passName = true;
  //     }
  //   }
  //   if (this.passName ) {
  //     alert('alredy exsist');
  //     this.isLogin = false;
  //   } else {
  //     list.push(data);
  //   }


  //    localStorage.setItem('signup', JSON.stringify(list));
  // }

  ngOnInit() {
   this.totalEmail
  }
}
