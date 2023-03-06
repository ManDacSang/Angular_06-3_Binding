import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product2Service } from '../services/product2.service';

@Component({
  selector: 'app-service-product-image-event-detail',
  templateUrl: './service-product-image-event-detail.component.html',
  styleUrls: ['./service-product-image-event-detail.component.css'],
})
export class ServiceProductImageEventDetailComponent implements OnInit {
  selectedProduct: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private _fs: Product2Service,
    private router: Router
  ) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.selectedProduct = _fs.getProductDetail(id);
      }
    });
  }
  goBack() {
    this.router.navigate(['service-product-image-event']);
  }

  ngOnInit(): void {}
}
