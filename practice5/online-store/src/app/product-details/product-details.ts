import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();
  @Output() toggleFavorite = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.product.id);
  }
  onToggleFavorite() {
    this.toggleFavorite.emit(this.product.id);
  }
}