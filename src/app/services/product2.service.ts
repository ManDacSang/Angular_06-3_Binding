import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product2Service {
  constructor() {}
  productsImage = [
    {
      productId: 1,
      name: 'Kem chống nắng SunPlay',
      price: 10000,
      image: 'assets/myPham/kcnSunplay.jpg',
    },
    {
      productId: 2,
      name: 'Sữa rửa mặt',
      price: 2000,
      image: 'assets/myPham/Srm.jpg',
    },
    {
      productId: 3,
      name: 'Serum',
      price: 3000,
      image: 'assets/myPham/serum.jpg',
    },
    {
      productId: 4,
      name: 'Dầu gội',
      price: 4000,
      image: 'assets/myPham/dauGoi.jpg',
    },
    {
      productId: 5,
      name: 'Kem chống nắng Celtela',
      price: 5000,
      image: 'assets/myPham/kcnCeltela.jpg',
    },
    {
      productId: 6,
      name: 'Mặt nạ',
      price: 6000,
      image: 'assets/myPham/matNa.jpg',
    },
    {
      productId: 7,
      name: 'Son 3ce',
      price: 7000,
      image: 'assets/myPham/son3ce.jpg',
    },
    {
      productId: 8,
      name: 'Mascara',
      price: 8000,
      image: 'assets/myPham/mascara.jpg',
    },
    {
      productId: 9,
      name: 'Kẻ lông mày ',
      price: 9000,
      image: 'assets/myPham/keLongMay.jpg',
    },
    {
      productId: 10,
      name: 'Kem dưỡng ',
      price: 10000,
      image: 'assets/myPham/kemduong.jpeg',
    },
  ];
  getProductsWithImages() {
    return this.productsImage;
  }
  getProductDetail(id: any) {
    return this.productsImage.find((x) => x.productId == id);
  }
}
