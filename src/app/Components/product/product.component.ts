import { Component } from '@angular/core';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { IProduct } from 'src/app/Models/IProduct';
import { Store } from 'src/app/Models/store';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  Store:Store=new Store("Gallery",["branch1","branch2","branch3"],"assets/img.jpg")
  ClientName:string="Ahmed"
 Discount= DiscountOffers;


product:IProduct={
  Id:1,
  Name:"iphone",
  Quantity:2,
  Price:20000,
  Img:"assets/img.jpg",
  CateogryID:2
}

}


