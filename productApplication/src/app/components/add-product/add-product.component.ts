import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product = {
    name:'',
    discription:'',
    price:''
  };
  submitted=false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

 saveProduct():void {
   const data={
     name: this.product.name,
     discription: this.product.discription,
     price: this.product.price
   };
 this.productService.create(data).subscribe(response=>{
   console.log(response);
   this.submitted = true;
 },
 error=>{
   console.log(error);
 });
}
newProduct():void{
  this.submitted = true;
    this.product = {
      name:'',
      discription:'',
      price:''
    };
  }
}
