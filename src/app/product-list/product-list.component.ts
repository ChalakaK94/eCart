import { Component } from '@angular/core';
import {products, totalInStockProducts, totalOutOfStockProducts, totalProducts} from "./product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products = products
  readonly totalProducts = totalProducts;
  protected readonly totalInStockProducts = totalInStockProducts;
  protected readonly totalOutOfStockProducts = totalOutOfStockProducts;
}
