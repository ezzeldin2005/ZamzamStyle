import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: IProduct[] = [
    {
      ID: 1,
      Name: 'عباءة خليجية فاخرة',
      Desription: 'تصميم أنيق ومريح',
      ImgUrl: '/Ln8bIoYzP7olebcMxguN6ottJfC56XwKM5fK9mBj.jpg',
      Color: 'أسود',
      CategoryID: 2
    },
    {
      ID: 2,
      Name: 'عباءة سورية كلاسيك',
      Desription: 'خامة عالية الجودة',
      ImgUrl: '/Ln8bIoYzP7olebcMxguN6ottJfC56XwKM5fK9mBj.jpg',
      Color: 'كحلي',
      CategoryID: 2
    },
    {
      ID: 3,
      Name: 'عباءة عصرية',
      Desription: 'ستايل حديث',
      ImgUrl: '/Ln8bIoYzP7olebcMxguN6ottJfC56XwKM5fK9mBj.jpg',
      Color: 'بيج',
      CategoryID: 2
    },
    {
      ID: 4,
      Name: 'عباءة مطرزة',
      Desription: 'تفاصيل فاخرة',
      ImgUrl: '/Ln8bIoYzP7olebcMxguN6ottJfC56XwKM5fK9mBj.jpg',
      Color: 'أسود',
      CategoryID: 3
    },
    {
      ID: 5,
      Name: 'عباءة يومية',
      Desription: 'خفيفة ومريحة',
      ImgUrl: '/Ln8bIoYzP7olebcMxguN6ottJfC56XwKM5fK9mBj.jpg',
      Color: 'رمادي',
      CategoryID: 3
    },
    {
      ID: 6,
      Name: 'عباءة أطفال',
      Desription: 'ناعمة ومريحة',
      ImgUrl: '/Ln8bIoYzP7olebcMxguN6ottJfC56XwKM5fK9mBj.jpg',
      Color: 'وردي',
      CategoryID: 3
    },
    {
      ID: 7,
      Name: 'عباءة فخمة',
      Desription: 'للمناسبات',
      ImgUrl: '/Ln8bIoYzP7olebcMxguN6ottJfC56XwKM5fK9mBj.jpg',
      Color: 'ذهبي',
      CategoryID: 4
    },
    {
      ID: 8,
      Name: 'عباءة سوداء كلاسيك',
      Desription: 'تصميم بسيط',
      ImgUrl: '/Ln8bIoYzP7olebcMxguN6ottJfC56XwKM5fK9mBj.jpg',
      Color: 'أسود',
      CategoryID: 4
    },
    {
      ID: 9,
      Name: 'عباءة مفتوحة',
      Desription: 'ستايل كاجوال',
      ImgUrl: '/Ln8bIoYzP7olebcMxguN6ottJfC56XwKM5fK9mBj.jpg',
      Color: 'أبيض',
      CategoryID: 4
    }
  ];

  getAllProducts(): IProduct[] {
    return this.products;
  }
}