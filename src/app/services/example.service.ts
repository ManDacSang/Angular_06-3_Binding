import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  url = './assets/data/product.json';
  url2 = 'https://jsonplaceholder.typicode.com/users';
  constructor(private _http: HttpClient) {}
  getAllProducts() {
    return [
      {
        id: 1,
        name: 'tiger',
        price: 19,
      },
      {
        id: 2,
        name: '333',
        price: 18,
      },
      {
        id: 3,
        name: 'saiGon',
        price: 17,
      },
      {
        id: 4,
        name: 'quy nhon',
        price: 17,
      },
    ];
  }
  getAllProducts_2(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.url2);
  }
}
