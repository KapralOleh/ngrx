import { createReducer, on } from "@ngrx/store";
import { addProduct, deleteProduct, editProduct, getProducts, Product } from "../actions/product.actions";

export const initialState: Product[] = [];

export const productsReducer = createReducer(
  initialState,
  on(addProduct, (state, { product }) => state.concat([product])),
  on(getProducts, (state) => ({ ...state })),
  on(editProduct, (state, { product }) => {
    return state.map(element => {
      if (element.id === product.id) {
        element = product;
      }
      return element;
    })
  }),
  on(deleteProduct, (state, { productId }) => state.filter(product => product.id !== productId))
);
