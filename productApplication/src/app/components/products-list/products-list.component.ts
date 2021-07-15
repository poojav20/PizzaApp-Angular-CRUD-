import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: any;
  currentProduct : any;
  currentIndex = -1;
  name = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.retrieveProducts();
  }
  retrieveProducts():void{
    this.productService.getAll().subscribe(data=>{
      this.products = data;
      console.log(data);
    },
    error=>{
      console.log(error);
    });
  }

  refreshList(){
    this.retrieveProducts();
    this.currentProduct = null;
    this.currentIndex = -1;
  }

 setActiveProduct(product: any,index: number):void{
   this.currentProduct = product;
   this.currentIndex = index;
 }

 removeAllProducts(){
   this.productService.deleteAll().subscribe(
     response=>{
       console.log(response);
       this.retrieveProducts();
     },
     error=>{
       console.log(error);
     });
 }
 searchName():void {
   this.productService.findByName(this.name).subscribe(
     data=>{
       this.products = data;
       console.log(data);
     },
     error =>{
       console.log(error);
     }
   )
 }
}
