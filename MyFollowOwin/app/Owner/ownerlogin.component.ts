import {Component, OnInit} from '@angular/core';
import { Product }from './product';  
import { UserService }from './users.service'; 

@Component({
    selector: 'my-owner',
    templateUrl: 'app/Owner/ownerlogin.component.html',
    providers: [UserService]
})



export class OwnerLoginComponent implements OnInit{

    products: Array<Product>;
    product: Product;
    errorMessage: string;
    constructor(private userservice: UserService) {
        this.products = new Array<Product>();
        this.product = new Product();
    }

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        var displayProduct = this.userservice.getProduct()
            .subscribe((products) => {
                this.products = products
            }, err => {
                this.errorMessage = err;
            });

        return displayProduct;
    }





    addProduct: boolean = false;
    showForm(): void {
        this.addProduct = !this.addProduct;
    }

    addedProduct: boolean = false;
    showProduct(): void {
        this.addedProduct = !this.addedProduct;
    }

    onSubmit(product: Product) {
        var postProduct = this.userservice.setProduct(this.product)
            .subscribe((products) => {
                this.products = products
            }, err => {
                this.errorMessage = err;
            });

    }



}