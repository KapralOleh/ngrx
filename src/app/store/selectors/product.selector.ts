import { createSelector } from '@ngrx/store';
import { Product } from '../actions/product.actions';

export interface ProductState {
  feature: Product;
}

export const selectFeature = (state: ProductState) => state.feature;

export const selectProduct = () => createSelector(
  selectFeature,
  (state: Product) => state
);
