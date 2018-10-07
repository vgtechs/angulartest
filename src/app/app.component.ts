import { Component } from '@angular/core';


declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appi';
  
   public my2:boolean = false;
   public show1:boolean = true;
   public show2:boolean = false;
   public show3:boolean = false;
   public showb1:boolean = true;
   public showb2:boolean = false;
  
  ngOnInit () {  }
  
 
  
Go1(){
 this.show1 = !this.show1;
 this.show2 = !this.show2;
 
 this.showb1 = !this.showb1;
 this.showb2 = !this.showb2;
}

Go2(){
 this.show2 = !this.show2;
 this.show3 = !this.show3;
 this.showb2 = !this.showb2;
}
  
  


public products = ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5', 'Product 6', 'Product 7'];

