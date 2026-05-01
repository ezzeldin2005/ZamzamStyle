import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../Models/iproduct';
import { ProductService } from '../../../Services/product-service';
import { CommonModule } from '@angular/common';
import { ProdcutCard } from "../../prodcut-card/prodcut-card";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.html',
  styleUrl: './shop.css',
  imports: [CommonModule, ProdcutCard , FormsModule]
})
export class Shop implements OnInit {

  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];

  selectedCategoryId: number = 1;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.products = this.productService.getAllProducts();

    // ✅ Get category from route
    this.route.paramMap.subscribe(params => {
      const catId = Number(params.get('catId'));
      if (catId) {
        this.selectedCategoryId = catId;
      }
      this.applyFilters();
    });
  }

  applyFilters() {
    this.filteredProducts = this.products.filter(p =>
      (this.selectedCategoryId === 1 || p.CategoryID === this.selectedCategoryId)
);
  }

  onCategoryChange(catId: number) {
    this.selectedCategoryId = catId;
    this.applyFilters();
  }
}