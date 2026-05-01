import { Component, Input } from '@angular/core';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-prodcut-card',
  templateUrl: './prodcut-card.html',
  styleUrl: './prodcut-card.css',
})
export class ProdcutCard {

  @Input() product!: IProduct;

}