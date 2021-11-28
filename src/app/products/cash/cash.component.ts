import {Component, HostListener, OnInit} from '@angular/core';
import {BooleanService} from "../../boolean.service";

@Component({
  selector: 'app-cash',
  template: `
<div class="wrapp">
  <div class="our-text">
      <p [ngClass]="innerWidth<507&&b.t2?'_activeP':''">Earn 0.30% APY* on your uninvested cash and get more flexibility with your brokerage account.</p>
      <button>Learn More</button>
    </div>
    <div class="our-image">
      <img src="{{routeImgTest}}" alt="">
    </div>
</div>

  `,
  styleUrls: ['./cash.component.scss']
})
export class CashComponent implements OnInit {
  routeImgTest: string = ''

  constructor(public b:BooleanService) {
    this.routeImgTest = 'assets/image/fb620ac577223a633f581b1104de363b.png'
  }


  public innerWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
  }


  ngOnInit(): void {
  }

}
