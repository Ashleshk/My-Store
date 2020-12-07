import { Component, OnInit} from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  items;
  checkoutForm;
  // To gather the user's name and address, set the 
  //checkoutForm property with a form model containing name 
  //and address fields, using the FormBuilder group() method.
  // Add this between the curly braces, {}, of the constructor.
  constructor(private cartService: CartService,
              private formBuilder: FormBuilder
             ) {
       this.checkoutForm =this.formBuilder.group({
         name:'',
         address:''
       });
   }
   ngOnInit() {
    this.items = this.cartService.getItems();
  }
 
  onSubmit(customerData){
    //PRocess checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your Order has been submitted', customerData);
  }
}
