import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <section class="our-products">
      <div class="our-container">
        <div class="our-navigation">
          <h1>Our Products</h1>
          <ul>
            <li><a routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" [routerLink]="['/']">Cash
              Management</a></li>
            <li><a routerLinkActive="active" [routerLink]="['/stocks']">Stocks & Funds</a></li>
            <li><a routerLinkActive="active" [routerLink]="['/option']">Options</a></li>
            <li><a routerLinkActive="active" [routerLink]="['/gold']">Gold</a></li>
            <div class="our-border"></div>
            <li><a [routerLink]="['/crypto']"><span class="pink">Crypto</span></a></li>
          </ul>
        </div>
        <router-outlet></router-outlet>
      </div>
    </section>
  `,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }


}
