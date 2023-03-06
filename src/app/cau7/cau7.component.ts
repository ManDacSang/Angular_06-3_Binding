import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cau7',
  templateUrl: './cau7.component.html',
  styleUrls: ['./cau7.component.css'],
})
export class Cau7Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onClick(event: any) {
    alert(event.pointerId);
  }
  onSubmit(value: string) {
    alert(value);
  }
  tinhTong(value1: any, value2: any) {
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    alert(value1 + value2);
  }
  tinhtru(value1: any, value2: any) {
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    alert(value1 - value2);
  }
  tinhnhan(value1: any, value2: any) {
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    alert(value1 * value2);
  }
  tinhchia(value1: any, value2: any) {
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    alert(value1 % value2);
  }
}
