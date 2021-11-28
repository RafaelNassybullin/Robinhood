import {Component, OnInit, ViewEncapsulation} from '@angular/core';


import SwiperCore, {
  EffectFade,
  Mousewheel,
  SwiperOptions,
  Pagination,
  Navigation
} from 'swiper';

import './swiper.min.css'

SwiperCore.use([
  EffectFade,
  Mousewheel,
  Pagination,
  Navigation]);

@Component({
  selector: 'app-slider',
  template: `
    <section class="slider-section">
      <div class="container">
        <swiper class="mySwiper"
                [config]="config"
                [mousewheel]="false"
                [allowTouchMove]="false"
        >
          <ng-template swiperSlide>
            <div class="my-slidess">
              <div class="image-slide">
                <img src="{{image}}" alt="">
              </div>
              <div class="text-slide">
                <h1>Learn As You Grow</h1>
                <p>Our goal is to make investing in financial markets more affordable, more intuitive, and more fun, no
                  matter how much experience you have (or don’t have).</p>
              </div>
            </div>
          </ng-template>
          <ng-template swiperSlide>
            <div class="my-slidess">
              <div class="image-slide order">
                <img src="{{image}}" alt="">
              </div>
              <div class="text-slide">
                <h1>Learn As You Grow</h1>
                <p>Our goal is to make investing in financial markets more affordable, more intuitive, and more fun, no
                  matter how much experience you have (or don’t have).</p>
              </div>
            </div>
          </ng-template>
          <ng-template swiperSlide>
            <div class="my-slidess">
<!--              <div class="image-slide">-->
<!--                <img src="{{image}}" alt="">-->
<!--              </div>-->
              <div class="text-slide mod">
                <h1>Customize As You Grow</h1>
                <p>Our goal is to make investing in financial markets more affordable, more intuitive, and more fun, no
                  matter how much experience you have (or don’t have).</p>
              </div>
            </div>
          </ng-template>
        </swiper>
        <div class="navi">
          <div class="next-btn">
            <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M19.3021 13.1979L21.3645 11.1355L11 0.770996L0.635437 11.1355L2.69783 13.1979L9.5417 6.3541V21.5001H12.4583V6.35414L19.3021 13.1979Z"
                    />
            </svg>
          </div>
          <div class="prev-btn">
            <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M2.69783 8.80217L0.635437 10.8646L10.9999 21.2291L21.3645 10.8646L19.3021 8.80217L12.4582 15.646V0.5H9.54164V15.646L2.69783 8.80217Z"
                    />
            </svg>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements OnInit {
  pagWords: any[] = ['Learn', 'Manage', 'Customize']
  image: string = ''

  constructor() {
    this.image = 'assets/image/e9298afe89e19d69e6c0e7ef99a822cb.png'
  }

  config: SwiperOptions = {
    speed: 750,
    navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn',
    },
    direction: "vertical",
    loop: true,
    pagination: {
      clickable: true,
      bulletClass: 'pagi',
      bulletActiveClass: 'pagi-active',
      renderBullet: (index, className) => {
        return `<span class="${className}">${this.pagWords[index]}</span>`
      }
    },
  };

  // slides: any = ['red', 'blue', 'green'];

  ngOnInit(): void {
  }

}
