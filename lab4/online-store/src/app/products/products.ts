import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { products } from '../products';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports:[CommonModule, RouterModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent {
  products = products;
  share(product: any) {
  const text = `Check this product: ${product.name} ${product.link}`;
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

}
