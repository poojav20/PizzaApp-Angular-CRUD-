import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/product';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {

  currentProduct: any;
  message = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getProduct(this.route.snapshot.paramMap.get('id'));
  }

  getProduct(id: any) {
    this.productService.get(id).subscribe(
      (data) => {
        this.currentProduct = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateProduct() {
    this.productService
      .update(this.currentProduct.id, this.currentProduct)
      .subscribe(
        (response) => {
          console.log(response);
          this.message = 'The Pizza item was updated successfully!';
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteProduct() {
    this.productService.delete(this.currentProduct.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/products']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
