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
        this.editProduct = false;
        this.addedProduct = false;
    }

    addedProduct: boolean = false;
    showProduct(): void {
        this.addedProduct = !this.addedProduct;
        this.editProduct = false;
        this.addProduct = false;
    }


    editProduct: boolean = false;
    editForm(product:Product): void {
        this.product = product;
        this.editProduct = !this.editProduct;
        //this.addedProduct = false;
        this.addProduct = false;
    }

    onSubmit(product: Product) {
        
        var postProduct = this.userservice.setProduct(this.product)
            .subscribe((products) => {
                this.products = products
            }, err => {
                this.errorMessage = err;
            });

    }


    onDelete(product: Product) {

        return this.userservice.deleteProduct(product)
            .subscribe((products) => {
                this.products = products
            }, err => {
                this.errorMessage = err;
            });

        
    }



    onEdit(product: Product) {

        return this.userservice.editProduct(product)
            .subscribe((products) => {
                this.products = products
            }, err => {
                this.errorMessage = err;
            });


    }



}