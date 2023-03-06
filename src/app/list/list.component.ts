import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  products: any;

  constructor(private _service: ExampleService) {}

  showDetail() {
    this.products = this._service.getAllProducts_2().subscribe({
      next: (d) => {
        this.products = d;
      },
    });
  }
}
