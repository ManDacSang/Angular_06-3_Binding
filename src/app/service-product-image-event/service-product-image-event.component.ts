import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product2Service } from '../services/product2.service';

@Component({
  selector: 'app-service-product-image-event',
  templateUrl: './service-product-image-event.component.html',
  styleUrls: ['./service-product-image-event.component.css'],
})
export class ServiceProductImageEventComponent implements OnInit {
  ngOnInit(): void {}
  public products: any;
  constructor(perservice: Product2Service, private router: Router) {
    this.products = perservice.getProductsWithImages();
  }
  viewDetail(f: any) {
    this.router.navigate(['service-product-image-event', f.productId]);
  }
}
