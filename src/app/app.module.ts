import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { productsReducer } from './store/reducers/product.reducer';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ products: productsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
