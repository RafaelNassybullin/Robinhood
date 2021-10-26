import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CashComponent} from "./products/cash/cash.component";
import {StocksComponent} from "./products/stocks/stocks.component";
import {OptionsComponent} from "./products/options/options.component";
import {GoldComponent} from "./products/gold/gold.component";
import {CryptoComponent} from "./products/crypto/crypto.component";

const routes: Routes = [
  {path: '', component: CashComponent},
  {path: 'stocks', component: StocksComponent},
  {path: 'option', component: OptionsComponent},
  {path: 'gold', component: GoldComponent},
  {path: 'crypto', component: CryptoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
