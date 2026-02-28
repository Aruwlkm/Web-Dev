import { CommonModule } from '@angular/common';
import { Product } from '../product.model';
import { ProductItemComponent } from '../product-details/product-details';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductListComponent {

  @Input() products: Product[] = [];   

  @Output() delete = new EventEmitter<number>();
  @Output() toggleFavorite = new EventEmitter<number>();

  handleDelete(id: number) {
    this.delete.emit(id);
  }

  handleToggleFavorite(id: number) {
    this.toggleFavorite.emit(id);
  }
}