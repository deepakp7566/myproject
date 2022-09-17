import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile;
  constructor(public activatedRoute: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log('data', JSON.parse(res.value));
      if (res.value) {
        this.profile = JSON.parse(res.value);
        console.log('data', this.profile);
      }
    });
  }
}
