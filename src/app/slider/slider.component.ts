import {Component, OnInit, ViewEncapsulation} from '@angular/core';


import SwiperCore, {
  EffectFade,
  Mousewheel,
  SwiperOptions,
  Pagination,
  Navigation
} from 'swiper';


SwiperCore.use([
  EffectFade,
  Mousewheel,
  Pagination,
  Navigation]);

@Component({
  selector: 'app-slider',
  template: `
    <swiper class="mySwiper"
            [config]="config"
            [mousewheel]="true"
            (slideChange)="onSlideChange($event)"
    >
      <ng-container *ngFor="let i of slides">
        <ng-template swiperSlide>
          <div class="my-slidess" [ngStyle]="{background:i}">{{i}}</div>
        </ng-template>
      </ng-container>
    </swiper>

  `,
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements OnInit {
  onSlideChange(e: any) {
    // console.log(e.realIndex+1);
  }

  pagWords: any[] = ['one', 'two', 'three']
  config: SwiperOptions = {
    speed: 1000,
    navigation: true,
    pagination: {
      clickable: true,
      bulletClass:'uigyug',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      renderBullet: (index, className) => {
        return `<span class="${className}">${this.pagWords[index]}</span>`
      }
    },
  };

  slides: any = ['red', 'blue', 'green'];


  constructor() {
  }

  ngOnInit(): void {
  }

}
