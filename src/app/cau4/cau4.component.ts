import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cau4',
  templateUrl: './cau4.component.html',
  styleUrls: ['./cau4.component.css'],
})
export class Cau4Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public name: string = 'Trần Duy Thanh';
  public email: string = 'thanhtd@st.uel.edu';
  public nameid: string = 'nameid';
  public emailid: string = 'emailid';
  public isDisable: boolean = true;
  changeView(): void {
    this.isDisable = !this.isDisable;
  }
}
