import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';
import { Product, ProductActions } from '../actions/product.actions';

@Injectable()
export class ProductsEffects {

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.LOAD_PRODUCTS),
    mergeMap(() => this.productsService.getAll()
      .pipe(
        map((products: Product[]) => ({ type: ProductActions.LOAD_PRODUCTS_SUCCESS, products })),
        catchError(() => EMPTY)
      ))
    )
  );
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) { }
}
