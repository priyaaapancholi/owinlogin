import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
import { UserService }from './../users.service';
import { Product, Platform }from './../Product/product';
import { ProductUpdate }from './../ProductUpdate/productupdate';
import { Follow }from './../Follow/follow';

@Component({
    selector: 'products',
    templateUrl: 'app/Owner/products.component.html',
    providers: [UserService],
    directives: [ROUTER_DIRECTIVES]
})

export class ProductsComponent {
    platforms = Platform;

    follows: Array<Follow>;
    follow: Follow;

    productUpdate: ProductUpdate;
    productUpdates: Array<ProductUpdate>;

    product: Product;
    products: Array<Product>;

   
    view: boolean = false;
    following: any[] = [];
    errorMessage: string;



    constructor(private userService: UserService) {
        this.follow = new Follow();
        this.follows = new Array<Follow>();

        this.productUpdate = new ProductUpdate();
        this.productUpdates = new Array<ProductUpdate>();

        this.products = new Array<Product>();
        this.product = new Product();

        this.getAllProducts();
    }


    getAllProducts() {
        
        var showProduct = this.userService.getAllProduct()
            .subscribe((products) => {
                this.products = products
                this.followDetails()
            }, err => {
                this.errorMessage = err;
            });


    }



    viewUpdates(productId: number) {
        this.view = true;
        var viewProductUpdate = this.userService.viewProductUpdates(productId)
            .subscribe((productUpdates) => {
                this.productUpdates = productUpdates
            }, err => {
                this.errorMessage = err;
            });

    }


    followProducts(productId: number) {
        this.following[productId] = true;
     
        var followProduct = this.userService.followProduct(productId)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => { //this.getAllProducts();
            }

            );
    }


    unfollowProducts(productId: number) {
        this.following[productId] = false;
        this.view = false;
        var unfollowProduct = this.userService.unfollowProduct(productId)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => { //this.getAllProducts(); 
            }

            );
    }



    followDetails() {
        this.userService.getFollowStatus()
            .subscribe((follow) => {
                this.follows = follow;
            }, err => {
                this.errorMessage = err;
            },
            () => {

                for (let follow of this.follows) {
                    this.following[follow.ProductId] = true;

                }
            });
    }




}