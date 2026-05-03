import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: IProduct[] = [
    {
      ID: 1,
      Name: 'عباية خليجية فاخرة',
      Desription: 'تصميم أنيق ومريح',
      ImgUrl: '/Ln8bIoYzP7olebcMxguN6ottJfC56XwKM5fK9mBj.jpg',
      Color: ['أسود','رمادى'],
      CategoryID: 2
    },
    {
      ID: 2,
      Name: 'عباية سورية كلاسيك',
      Desription: 'خامة عالية الجودة',
      ImgUrl: '/Ln8bIoYzP7olebcMxguN6ottJfC56XwKM5fK9mBj.jpg',
      Color: ['أسود','رمادى'],
      CategoryID: 2
    },
    {
      ID: 3,
      Name: 'عباية عصرية',
      Desription: 'ستايل حديث',
      ImgUrl: '/Ln8bIoYzP7olebcMxguN6ottJfC56XwKM5fK9mBj.jpg',
      Color: ['أسود','رمادى'],
      CategoryID: 2
    },
    {
      ID: 4,
      Name: 'عباية مطرزة',
      Desription: 'تفاصيل فاخرة',
      ImgUrl: '/Ln8bIoYzP7olebcMxguN6ottJfC56XwKM5fK9mBj.jpg',
      Color: ['أسود','رمادى'],
      CategoryID: 3
    },
    {
      ID: 5,
      Name: 'عباية يومية',
      Desription: 'خفيفة ومريحة',
      ImgUrl: '/Ln8bIoYzP7olebcMxguN6ottJfC56XwKM5fK9mBj.jpg',
      Color: ['أسود','رمادى'],
      CategoryID: 3
    },
    {
      ID: 6,
      Name: 'عباية أطفال',
      Desription: 'ناعمة ومريحة',
      ImgUrl: '/Ln8bIoYzP7olebcMxguN6ottJfC56XwKM5fK9mBj.jpg',
      Color: ['أسود','رمادى'],
      CategoryID: 3
    },
    {
      ID: 7,
      Name: 'عباية فخمة',
      Desription: 'للمناسبات',
      ImgUrl: '/Ln8bIoYzP7olebcMxguN6ottJfC56XwKM5fK9mBj.jpg',
      Color: ['أسود','رمادى'],
      CategoryID: 4
    },
    {
      ID: 8,
      Name: 'عباية سوداء كلاسيك',
      Desription: 'تصميم بسيط',
      ImgUrl: '/Ln8bIoYzP7olebcMxguN6ottJfC56XwKM5fK9mBj.jpg',
      Color: ['أسود','رمادى'],
      CategoryID: 4
    },
    {
      ID: 9,
      Name: 'عباية مفتوحة',
      Desription: 'ستايل كاجوال',
      ImgUrl: '/Ln8bIoYzP7olebcMxguN6ottJfC56XwKM5fK9mBj.jpg',
      Color: ['أسود','رمادى'],
      CategoryID: 4
    }
  ];

  getAllProducts(): IProduct[] {
    return this.products;
  }
}