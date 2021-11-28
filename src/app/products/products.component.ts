import {Component, HostListener, OnInit} from '@angular/core';
import {BooleanService} from "../boolean.service";
// *ngIf="boo.t2"

@Component({
  selector: 'app-products',
  template: `
    <section [ngClass]="boo.t2?'our-products _active':'our-products'">
      <div class="our-container">
        <div class="our-navigation">
          <h1 (click)="jfff()">Our Products <div [ngClass]="boo.t2?'arrow-rotate':''" *ngIf="innerWidth<507"><svg   viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="black"/>
</svg></div></h1>
          <ul *ngIf="innerWidth<507?boo.t2:true">
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

  constructor(public boo: BooleanService) {}

  jfff() {
    this.boo.toggle()
  }


  public innerWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
  }


  ngOnInit(): void {
  }


}
