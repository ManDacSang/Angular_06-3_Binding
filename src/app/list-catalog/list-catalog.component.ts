import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-catalog',
  templateUrl: './list-catalog.component.html',
  styleUrls: ['./list-catalog.component.css'],
})
export class ListCatalogComponent implements OnInit {
  categoryData = [
    {
      CateID: 1,
      CateName: 'Laptop',
      CateProducts: [
        {
          ProductID: 'p1',
          ProductName: 'Asus',
          Price: 1000,
          img: 'assets/sanPhamTech/asus.jpg',
        },
        {
          ProductID: 'p2',
          ProductName: 'Acer',
          Price: 2000,
          img: 'assets/sanPhamTech/acer.jpg',
        },
        {
          ProductID: 'p3',
          ProductName: 'Dell',
          Price: 3000,
          img: 'assets/sanPhamTech/dell.jpg',
        },
        {
          ProductID: 'p4',
          ProductName: 'Lenovo',
          Price: 4000,
          img: 'assets/sanPhamTech/lenovo.jpg',
        },
        {
          ProductID: 'p5',
          ProductName: 'ThinkPro',
          Price: 5000,
          img: 'assets/sanPhamTech/thinkpro.jpg',
        },
      ],
    },
    {
      CateID: 2,
      CateName: 'Apple',
      CateProducts: [
        {
          ProductID: 'p1',
          ProductName: 'Maccbook Air m2',
          Price: 1000,
          img: 'assets/sanPhamTech/macbookm2.jpg',
        },
        {
          ProductID: 'p2',
          ProductName: 'Maccbook Pro',
          Price: 2000,
          img: 'assets/sanPhamTech/mac pro.jpg',
        },
        {
          ProductID: 'p3',
          ProductName: 'Maccbook Pro 13',
          Price: 3000,
          img: 'assets/sanPhamTech/macpro13.jpg',
        },
        {
          ProductID: 'p4',
          ProductName: 'Imac M1 24',
          Price: 4000,
          img: 'assets/sanPhamTech/imac.jpg',
        },
        {
          ProductID: 'p5',
          ProductName: 'Ipad apple',
          Price: 5000,
          img: 'assets/sanPhamTech/ipad apple.jpg',
        },
      ],
    },
    {
      CateID: 3,
      CateName: 'Bàn phím',
      CateProducts: [
        {
          ProductID: 'p1',
          ProductName: 'Logitech',
          Price: 1000,
          img: 'assets/sanPhamTech/kbLogitech.jpg',
        },
        {
          ProductID: 'p2',
          ProductName: 'Corsair',
          Price: 2000,
          img: 'assets/sanPhamTech/kbcorsair.jpg',
        },
        {
          ProductID: 'p3',
          ProductName: 'Razer',
          Price: 3000,
          img: 'assets/sanPhamTech/kbRazer.jpg',
        },
        {
          ProductID: 'p4',
          ProductName: 'Asus',
          Price: 4000,
          img: 'assets/sanPhamTech/kbasus.jpg',
        },
        {
          ProductID: 'p5',
          ProductName: 'Ducky',
          Price: 5000,
          img: 'assets/sanPhamTech/kbDucky.jpg',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
