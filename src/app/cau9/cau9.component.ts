import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cau9',
  templateUrl: './cau9.component.html',
  styleUrls: ['./cau9.component.css'],
})
export class Cau9Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  giaiptbac2(value1: any, value2: any, value3: any) {
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    value3 = parseInt(value3);
    let d = value2 * value2 - 4 * value1 * value3;
    if (d < 0) {
      alert('pt vo nghiem');
    } else if (d == 0) {
      alert('pt có 1 nghiệm duy nhất' + -value2 / (2 * value1));
    } else if (d > 0) {
      alert(
        'x1=' +
          (-value2 + Math.sqrt(d)) / (2 * value1) +
          'và x2= ' +
          (-value2 - Math.sqrt(d)) / (2 * value1)
      );
    }
  }
}
