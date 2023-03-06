import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cau5',
  templateUrl: './cau5.component.html',
  styleUrls: ['./cau5.component.css'],
})
export class Cau5Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public success = 'text-success';
  public error = 'text-error';
  public primary = 'text-primary';
  public normal = 'text-normal';
  public multiClass = {
    'text-primary': true,
    'text-normal': true,
    'text-error': true,
  };
  public complexity = 'text-complexity';
}
