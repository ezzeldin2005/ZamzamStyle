import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICategory } from '../../../Models/icategory';
import { ProdcutCard } from "../../prodcut-card/prodcut-card";
import { Subscription } from 'rxjs';
import { CategoryService } from '../../../Services/category-service';
import { IProduct } from '../../../Models/iproduct';
import { ProductService } from '../../../Services/product-service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [ProdcutCard,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
  categories:ICategory[] = []

  products: IProduct[] = [];

  constructor(private catService : CategoryService , private productService: ProductService){
    this.categories = this.catService.getAllCategories()
    this.products = this.productService.getAllProducts();
  }


}
