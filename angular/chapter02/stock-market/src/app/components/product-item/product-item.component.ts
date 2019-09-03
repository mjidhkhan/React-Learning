import { Component, OnInit } from '@angular/core';

import { Product } from './../../model/product';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  public product: Product;
  private quantities: Array<number>;
  constructor() { }

  ngOnInit() {
    this.product = {
      name:'Test Product',
      imageUrl:'http://via.placeholder.com/150x150',
      price: 50,
      isOnSale: true,
      quantityInCart:0
    };

    this.quantities = [];
    for (let i = 0; i< 20; i++){
      this.quantities.push(i);
    }
  }

  incrementInCart(){
    this.product.quantityInCart++;
    if(this.product.quantityInCart > 0 ){
      this.product.isOnSale= true;
    }
    
  }
  decrementInCart(){
    if(this.product.quantityInCart > 0 ){
      this.product.quantityInCart--;
      if(this.product.quantityInCart == 0 ){
        this.product.isOnSale= false;
      }
    }
  }

  onQtyChange(qty){
    console.log('Quantity change', qty);
  }

}
