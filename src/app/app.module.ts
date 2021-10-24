import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { InvestorsComponent } from './investors/investors.component';
import { FrationalSharesComponent } from './frational-shares/frational-shares.component';
import { FooterComponent } from './footer/footer.component';
import { RightsComponent } from './rights/rights.component';
import { SliderComponent } from './slider/slider.component';
import {SwiperModule} from "swiper/angular";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ScheduleComponent,
    InvestorsComponent,
    FrationalSharesComponent,
    FooterComponent,
    RightsComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
