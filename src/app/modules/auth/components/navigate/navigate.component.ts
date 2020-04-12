import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
    setTimeout(async () => {
      await this.routing();
    }, 1000);
  }
  async routing() {
    this.router.navigateByUrl('core/account');
  }

}
