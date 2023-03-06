import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cau3',
  templateUrl: './cau3.component.html',
  styleUrls: ['./cau3.component.css'],
})
export class Cau3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public myVar = 'Hello Angular';
  getDataCau3() {
    return this.myVar;
  }
}
