import { Component, OnInit } from '@angular/core';
import { Stock } from './model/stock';


function log(className){
  console.log(className);
  return (...args)=>{
    console.log("Arguments passed to the class's constructor are ", args)
    return new className(...args)
  }

}

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit{

  
  title= 'Stock  App (main)'
  public stock: Stock;
  private counter:number = 1;
  ngOnInit(): void {

    
    this.stock = new Stock('Test Stock Company'+ this.counter++, 'TSC',65,60)
  }

  onToggleFavorite(stock: Stock){
    console.log('Favorite for stock ', stock, ' was triggered');
    this.stock.favorite = !this.stock.favorite;
  }

  changeStockObject(){
    this.stock = new Stock('New Stock - '+ this.counter++ +' Company', 'NSC',65,60)

  }

  changeStockPrice(){
    this.stock.price +=10;
  }
}
