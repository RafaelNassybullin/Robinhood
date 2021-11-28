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
import { ProductsComponent } from './products/products.component';
import { CashComponent } from './products/cash/cash.component';
import { StocksComponent } from './products/stocks/stocks.component';
import { OptionsComponent } from './products/options/options.component';
import { GoldComponent } from './products/gold/gold.component';
import { CryptoComponent } from './products/crypto/crypto.component';
import {BooleanService} from "./boolean.service";



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
    SliderComponent,
    ProductsComponent,
    CashComponent,
    StocksComponent,
    OptionsComponent,
    GoldComponent,
    CryptoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
  ],
  providers: [BooleanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
