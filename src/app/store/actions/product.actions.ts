import { createAction, props } from '@ngrx/store';

export interface Product {
  name: string;
  price: number;
  id: number;
}

export enum ProductActions {
  LOAD_PRODUCTS = 'LOAD_PRODUCTS',
  LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS',
  ADD_PRODUCT = 'ADD_PRODUCT',
  GET_PRODUCTS = 'GET_PRODUCTS',
  EDIT_PRODUCTS = 'EDIT_PRODUCTS',
  DELETE_PRODUCTS = 'DELETE_PRODUCTS',
}

export const addProduct = createAction(
  ProductActions.ADD_PRODUCT,
  props<{ product: Product }>()
);

export const loadProductsSuccess = createAction(
  ProductActions.LOAD_PRODUCTS_SUCCESS,
  props<{ products: Product[] }>()
);

export const getProducts = createAction(
  ProductActions.GET_PRODUCTS,
  props<{ products: Product[] }>()
);

export const editProduct = createAction(
  ProductActions.EDIT_PRODUCTS,
  props<{ product: Product }>()
);

export const deleteProduct = createAction(
  ProductActions.DELETE_PRODUCTS,
  props<{ productId: number }>()
);
