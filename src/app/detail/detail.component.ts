import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  products: any;
  constructor(private _S: ExampleService) {}

  // ngOnInit(): void {
  //   this.products = this._S.getAllProducts();
  // }
  showDetail() {
    this.products = this._S.getAllProducts();
  }
}
