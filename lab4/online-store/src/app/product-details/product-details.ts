import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CommonModule } from '@angular/common';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css']
})
export class ProductDetailsComponent {

  product: any;

  constructor(private route: ActivatedRoute) {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = products[productId];
  }
}
