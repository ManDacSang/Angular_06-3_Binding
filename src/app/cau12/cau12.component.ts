import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cau12',
  templateUrl: './cau12.component.html',
  styleUrls: ['./cau12.component.css'],
})
export class Cau12Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  Products = [
    {
      ID: 1,
      name: 'Kem chống nắng SunPlay',
      price: 10000,
      image: 'assets/myPham/kcnSunplay.jpg',
    },
    {
      ID: 2,
      name: 'Sữa rửa mặt',
      price: 2000,
      image: 'assets/myPham/Srm.jpg',
    },
    {
      ID: 3,
      name: 'Serum',
      price: 3000,
      image: 'assets/myPham/serum.jpg',
    },
    {
      ID: 4,
      name: 'Dầu gội',
      price: 4000,
      image: 'assets/myPham/dauGoi.jpg',
    },
    {
      ID: 5,
      name: 'Kem chống nắng Celtela',
      price: 5000,
      image: 'assets/myPham/kcnCelltela.jpg',
    },
    {
      ID: 6,
      name: 'Mặt nạ',
      price: 6000,
      image: 'assets/myPham/matNa.jpg',
    },
    {
      ID: 7,
      name: 'Son 3ce',
      price: 7000,
      image: 'assets/myPham/son3ce.jpg',
    },
    {
      ID: 8,
      name: 'Mascara',
      price: 8000,
      image: 'assets/myPham/mascara.jpg',
    },
    {
      ID: 9,
      name: 'Kẻ lông mày ',
      price: 9000,
      image: 'assets/myPham/keLongMay.jpg',
    },
    {
      ID: 10,
      name: 'Kem dưỡng ',
      price: 10000,
      image: 'assets/myPham/kemduong.jpeg',
    },
  ];
}
