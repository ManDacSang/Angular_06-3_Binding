import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-product2',
  templateUrl: './list-product2.component.html',
  styleUrls: ['./list-product2.component.css'],
})
export class ListProduct2Component implements OnInit {
  Products: any;
  constructor(private pservice: ProductService) {
    this.Products = pservice.getProducts();
  }

  ngOnInit(): void {}
}
