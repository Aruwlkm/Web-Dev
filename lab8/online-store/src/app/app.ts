import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product.model';
import { Category } from './category.model';
import { ProductListComponent } from './products/products';
import { ApiService } from './api.service';

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
export class App implements OnInit {

  categories: Category[] = [];
  products: Product[] = [];

  selectedCategoryId = 1;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getCategories().subscribe((data: any) => {
      this.categories = data;
    });

    this.api.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

  get filteredProducts(): Product[] {
    return this.products.filter(
      (p: any) => p.category === this.selectedCategoryId
    );
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}