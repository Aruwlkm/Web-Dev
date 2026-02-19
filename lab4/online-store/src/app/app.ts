import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [ProductsComponent, RouterOutlet],
  template: `<app-products />`,

})
export class App {
  protected readonly title = signal('online-store');
}
