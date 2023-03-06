import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cau6',
  templateUrl: './cau6.component.html',
  styleUrls: ['./cau6.component.css'],
})
export class Cau6Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public isError: boolean = false;
  public textStyle = {
    color: 'darkorange',
    fontSize: '26px',
    'text-transform': 'uppercase',
  };
}
