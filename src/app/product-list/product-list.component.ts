import { Component } from '@angular/core';
import {products, totalInStockProducts, totalOutOfStockProducts, totalProducts} from "./product";
import {Product} from "./product/model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  searchKey = ''

  selectedRadioButton = 'all'
  products = products
  readonly totalProducts = totalProducts;
  protected readonly totalInStockProducts = totalInStockProducts;
  protected readonly totalOutOfStockProducts = totalOutOfStockProducts;
  selectedProduct!: Product;


  radioButtonChange(e: string) {
    this.selectedRadioButton = e;
  }

  onSearch(value: string) {
    this.searchKey = value
  }
}
