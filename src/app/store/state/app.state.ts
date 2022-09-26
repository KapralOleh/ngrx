import { Product } from "../actions/product.actions";

export interface AppState {
  readonly products: Product[];
}
