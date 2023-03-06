import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-first', //goi theo dang selector
  // selector: '.app-first',//goi theo dang class
  selector: '[app-first]', //goi theo dạng thuộc tính
  template: `<h2>hello user {{ nameUser }}</h2>
    <h2>{{ 'Hello user ' + nameUser }}</h2>
    <h2>{{ 'Hello ' + goiTenUser() }}</h2>
    <button (click)="onClick()">Click me</button>
    <hr />
    <div>
      enter your name: <input type="text" [(ngModel)]="name" />
      <p>Ten ban la: {{ name }}</p>
      <button (click)="changeName()">an zo day doi ten</button>
    </div> `,
  // templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  public nameUser: string = 'Man Đắc Sang';
  name = '';
  constructor() {}
  from1to2 = 'test';
  ngOnInit(): void {}
  onClick() {
    this.nameUser = 'Man Dac Sang 22222';
  }

  goiTenUser() {
    return 'Man Đắc Sang';
  }

  changeName() {
    this.name = 'sang dau ten';
  }
}
