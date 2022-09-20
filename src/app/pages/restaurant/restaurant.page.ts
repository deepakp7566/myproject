import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  name;
  lastname;
  username;
  list:any=[]
  houseno;
  globelarry:any=[]
  instagram;
  islog = false;
  constructor() {}
  fillform() {
    let list: any = [];
    const formFill = {
      Name: this.name,
      Lastname: this.lastname,
      Username: this.username,
      Houseno: this.houseno,
      Instagram: this.instagram,
    };
    const fillArry = localStorage.getItem('document');
    if (fillArry) {
      this.list = JSON.parse(fillArry);
    }

    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].Name === this.name) {
        this.islog = true;
      }
    }
    if (this.islog) {
      alert('invalid details');
      this.islog= false;
    } else {
      this.list.push(formFill);
      localStorage.setItem('document', JSON.stringify(this.list));
    }
  }

  ngOnInit() {
    const fillArry = localStorage.getItem('document');
    if (fillArry) {
      this.list = JSON.parse(fillArry);
    }
  }
}
