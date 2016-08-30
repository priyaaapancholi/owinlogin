import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
import { UserService }from './../users.service';
import { Product, Platform} from './../Product/product';
import { Follow }from './../Follow/follow';
import { ProductUpdate }from './../ProductUpdate/productupdate';

@Component({
    selector: 'getproducts',
    templateUrl: 'app/EndUser/getproducts.component.html',
    providers: [UserService],
    directives: [ROUTER_DIRECTIVES]
})

export class GetProductsComponent {

    products: Array<Product>;
    product: Product;

    platforms = Platform;

    productUpdate: ProductUpdate;
    productUpdates: Array<ProductUpdate>;

    followProduct: Array<Product>;
    FollowedProduct: Array<Product>;

    follows: Array<Follow>;
    follow: Follow;

    view: boolean = false;
    following: any[] = [];
    errorMessage: string;




    constructor(private userService: UserService) {
        this.products = new Array<Product>();
        this.product = new Product();
        this.productUpdate = new ProductUpdate();
        this.productUpdates = new Array<ProductUpdate>();
        this.follow = new Follow();
        this.follows = new Array<Follow>();
        this.getProducts();
    }



    getProducts() {
        var displayProduct = this.userService.getProduct()
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
        this.follow.UserStatusBit = true;
        //this.product.Id = productId;
        var followProduct = this.userService.followProduct(productId)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => {

            }

            );
    }




    unfollowProducts(productId: number) {
        this.view = false;
        this.following[productId] = false;
        var unfollowProduct = this.userService.unfollowProduct(productId)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => { //this.getProducts(); 
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