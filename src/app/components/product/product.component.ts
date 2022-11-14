import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addProduct, deleteProduct, editProduct, Product, ProductActions } from 'src/app/store/actions/product.actions';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  products: Observable<Product[]>;
  currentProduct!: any;

  @ViewChild('productName') productName!: ElementRef;
  @ViewChild('productPrice') productPrice!: ElementRef;

  constructor(private store: Store<AppState>) {
    this.products = this.store.select(state => state.products);
  }

  ngOnInit(): void {
    this.store.dispatch({ type: ProductActions.LOAD_PRODUCTS });
  }

  addProduct(name: string, price: string): void {
    this.store.dispatch(addProduct({
      product: {
        name: name,
        price: +price,
        id: Math.floor(Math.random() * 1000)
      }
    }));

    this.productName.nativeElement.value = '';
    this.productPrice.nativeElement.value = '';
  }

  editProduct(product: Product): void {
    this.store.dispatch(editProduct({ product }));
    this.currentProduct = null;
  }

  deleteProduct(productId: number): void {
    this.store.dispatch(deleteProduct({ productId }));
  }
}

