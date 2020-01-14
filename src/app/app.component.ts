import { Component } from '@angular/core';
import * as data from '../../public/products.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'product-app';
  products: any = (data as any).default;

  compareProdList() {
    return this.products.filter(p => p.compare);
  }
}
