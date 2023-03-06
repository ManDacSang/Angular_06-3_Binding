import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  Products = {
    productID: 123,
    productName: 'beer',
    price: 1000,
    image: 'assets/main.jpg',
  };
  constructor() {}

  ngOnInit(): void {}
}
