import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  display = true;
  @Input('parentData') public data: any;
  @Input('datafrom1') public dataFrom1: any;
  @Output() public childEvent = new EventEmitter();

  constructor() {}
  products = ['tiger', '333', 'saigon'];
  users = [
    {
      UserName: 'Man Dac Sang',
      ID: 'K204061446',
      Class: 'K20406C',
    },
  ];

  ngOnInit(): void {}
  changeView() {
    this.display = !this.display;
  }
  sendData() {
    var product = {
      pName: 'Tiger',
      price: 300,
    };
    var sang = 'sang';
    //send product info to app-component
    this.childEvent.emit(sang);
  }
}
function output() {
  throw new Error('Function not implemented.');
}
