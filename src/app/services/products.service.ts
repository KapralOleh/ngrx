import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Product } from "../store/actions/product.actions";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() {}

  getAll(): Observable<Product[]> {
    return of([{
      name: 'Name1',
      price: 100,
      id: 1231231
    },
    {
      name: 'Name2',
      price: 101,
      id: 12312331
    }]);
  }
}
