import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { productsReducer } from './store/reducers/product.reducer';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/effects/poducts.effect';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ products: productsReducer }),
    EffectsModule.forRoot([ProductsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
