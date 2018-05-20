import { Component, OnInit } from '@angular/core';
import { Product } from "../model/product.model";
import { ProductsService } from "../model/products.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public selectedCategory = 'Category 1';
  public products: Product[];

  public menuCategories: Set<string> = new Set();

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.productsService.getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  getCategories() {
    for (const i of this.products) {
      this.menuCategories.add(i.category);
    }
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }
}
