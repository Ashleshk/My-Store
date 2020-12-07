import { Component } from '@angular/core';
import { products } from '../products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{

  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}

/*
Why onNotify()  define here ? if raised by product-alerts;
Recall that it's the parent, product list component—not 
the product alerts component—that acts when the child
 raises the event.
*/

/**
 * service is an instance of a class that you can make 
 * available to any part of your application using 
 * Angular's dependency injection system.
 * 
 */