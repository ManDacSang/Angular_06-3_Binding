import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cau8',
  templateUrl: './cau8.component.html',
  styleUrls: ['./cau8.component.css'],
})
export class Cau8Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public name: string = '';
  public address: string = '';
  public email: string = '';
  public sdt: string = '';

  setDefaultAddress() {
    this.address = '13 đường hùng vương';
  }
}
