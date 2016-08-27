import { Component, OnInit } from '@angular/core';
import { Owner }from './../Owner/owner';
import { Product, Platform} from './../Product/product';
import { Follow }from './../Follow/follow';
import { UserService }from './../users.service';
import { ProductUpdate }from './../ProductUpdate/productupdate';




@Component({
    selector: 'my-app',
    templateUrl: 'app/EndUser/enduser.component.html',
    providers: [UserService]
})



export class OwnerComponent implements OnInit {
    platforms = Platform;

    owners: Array<Owner>;
    owner: Owner;

    productUpdate: ProductUpdate;
    productUpdates: Array<ProductUpdate>;

    products: Array<Product>;
    product: Product;
    followProduct: Array<Product>;
    FollowedProduct: Array<Product>;

    follows: Array<Follow>;
    follow: Follow;

    beOwner: boolean = false;
    addedProduct: boolean = false;
    view: boolean = false;
    following: any[] = [];
    followedProduct: boolean = false;
    errorMessage: string;

    constructor(private userService: UserService) {
        this.owners = new Array<Owner>();
        this.owner = new Owner();
        this.productUpdate = new ProductUpdate();
        this.productUpdates = new Array<ProductUpdate>();
        this.follow = new Follow();
        this.follows = new Array<Follow>();

    }

    ngOnInit() {
      
        this.getProducts();
    }

   

    showProduct(): void {
        this.addedProduct = !this.addedProduct;
        this.beOwner = false;
        this.followedProduct = false;

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





    showForm(): void {
        this.beOwner = !this.beOwner;
        this.addedProduct = false;
        this.followedProduct = false;
    }


    onSubmit(owner: Owner) {
       
        var postOwner = this.userService.setOwner(owner)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => { this.beOwner = false;/* window.location.reload(); */ }

            );   
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


    followProducts(productId:number) {
        this.following[productId] = true;
        this.follow.UserStatusBit = true;
        //this.product.Id = productId;
        var followProduct = this.userService.followProduct(productId)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => {
                this.getProducts();
                // this.followDetails();
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
            () => { this.getProducts(); }

            );    
    }


    followedProducts() {
        this.followedProduct = !this.followedProduct;
        this.beOwner = false;
        this.addedProduct = false;
        this.view = false;

        var followedProduct = this.userService.followedProduct()
            .subscribe((products) => {
                this.FollowedProduct = products;
            }, err => {
                this.errorMessage = err;
            });
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
                    this.following[follow.ProductId] =true;
                   
                }
            });
    }



}