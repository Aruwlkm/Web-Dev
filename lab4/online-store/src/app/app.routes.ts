import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products';
import { ProductDetailsComponent } from './product-details/product-details';

export const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent }
];