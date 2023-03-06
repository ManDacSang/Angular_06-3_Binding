import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cau11',
  templateUrl: './cau11.component.html',
  styleUrls: ['./cau11.component.css'],
})
export class Cau11Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  Products = {
    productID: 123,
    productName: 'thuốc trị xàm',
    price: 1000,
    image: 'assets/main.jpg',
  };
}
