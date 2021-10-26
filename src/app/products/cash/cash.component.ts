import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cash',
  template: `
<div class="wrapp">
  <div class="our-text">
      <p>Earn 0.30% APY* on your uninvested cash and get more flexibility with your brokerage account.</p>
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

  constructor() {
    this.routeImgTest = 'assets/image/fb620ac577223a633f581b1104de363b.png'
  }

  ngOnInit(): void {
  }

}
