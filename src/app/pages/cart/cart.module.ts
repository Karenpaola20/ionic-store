import { NgModule } from '@angular/core';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CartPageRoutingModule
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
