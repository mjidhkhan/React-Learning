import { Component, OnInit,EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

// model

import {Stock} from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockItemComponent /*implements OnInit*/ {
  title= 'Stock  App (item)'
  @Input() public stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;
 // public stockClasses;
  
  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
   }

   onToggleFavorite(event){
     this.toggleFavorite.emit(this.stock)
   }

   changeStockPrice(){
     this.stock.price +=5;
   }
/*
  ngOnInit() {

    this.stock = new Stock('Test Stock Company','TSC',85,80)
    let diff = (this.stock.price / this.stock.previousPrice)-1;
    let largeChange = Math.abs(diff)> 0.01;
    this.stockClasses ={
      'positive': this.stock.isPositiveChange(),
      'negative': !this.stock.isPositiveChange(),
      'large-change': largeChange,
      'small-change' : !largeChange,
    };
    
  }



  toggleFavorite(event) {
    console.log('We are toggling the favorite state for this stock', event);
    this.stock.favorite = !this.stock.favorite;
    }
*/
}
