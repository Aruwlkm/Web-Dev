import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { products, categories } from './products';
import { Product } from './product.model';
import { ProductListComponent } from './products/products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  template: `
    <h1>Online Store</h1>

    <div>
     <button
       *ngFor="let c of categories"
       (click)="selectCategory(c.id)"
       [style.background]="selectedCategoryId === c.id ? '#ccc' : ''">
       {{ c.name }}
     </button>
    </div>

    <app-product-list
      [products]="filteredProducts"
      (delete)="removeProduct($event)">
    </app-product-list>
  `,
})
export class App {

  categories = categories;
  products = products;

  selectedCategoryId = 1;

  get filteredProducts(): Product[] {
    return this.products.filter(
      p => p.categoryId === this.selectedCategoryId
    );
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }
  removeProduct(id: number) {
  this.products = this.products.filter(p => p.id !== id);
}
}