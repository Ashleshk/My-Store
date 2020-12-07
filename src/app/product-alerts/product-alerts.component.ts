import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product; 
  //The @Input() decorator indicates that the property value passes in 
  //from the component's parent, the product list component.
  @Output() notify = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
