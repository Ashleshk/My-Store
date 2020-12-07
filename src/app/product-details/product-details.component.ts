import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';
 
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  constructor(
    private route: ActivatedRoute,
    /** 
     * ActivatedRoute is specific to each component that the 
     * Angular Router loads. ActivatedRoute contains 
     * information about the route and the route's 
     * parameters.

    By injecting ActivatedRoute, you are configuring the 
    component to use a service. The Managing Data step 
    covers services in more detail.
    */

     //  Inject the cart service by adding it to the constructor().
     private cartService: CartService
  ) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
        /**The route parameters correspond to the path 
         * variables you define in the route. The URL 
         * that matches the route provides the productId.
         *  Angular uses the productId to display the 
         * details for each unique product. */
    
    });
  }

  
}

