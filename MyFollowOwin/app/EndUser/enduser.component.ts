import { Component, OnInit } from '@angular/core';
import { Owner }from './../Owner/owner';
import { Product, Platform} from './../Product/product';
import { Follow }from './../Follow/follow';
import { UserService }from './../users.service';





@Component({
    selector: 'my-app',
    templateUrl: 'app/EndUser/enduser.component.html',
    providers: [UserService]
})



export class OwnerComponent implements OnInit {
    platforms = Platform;

    owners: Array<Owner>;
    owner: Owner;


    products: Array<Product>;
    product: Product;
    followProduct: Array<Product>;
    FollowedProduct: Array<Product>;

    follows: Array<Follow>;
    follow: Follow;

    beOwner: boolean = false;
    addedProduct: boolean = false;
    following: any[] = [];
    followedProduct: boolean = false;
    errorMessage: string;

    constructor(private userService: UserService) {
        this.owners = new Array<Owner>();
        this.owner = new Owner();
    }

    ngOnInit() {
        //this.getOwners();
        this.getProducts();
    }

    //getOwners() {
    //    var displayOwner = this.userService.getOwner()
    //        .subscribe((owners) => {
    //            this.owners = owners
    //        }, err => {
    //            this.errorMessage = err;
    //        });
    //}


    showForm(): void {
        this.beOwner = !this.beOwner;
        this.addedProduct = false;
        this.followedProduct = false;
    }


    showProduct(): void {
        this.addedProduct = !this.addedProduct;
        this.beOwner = false;
        this.followedProduct = false;

    }


    onSubmit(owner: Owner) {
           var postOwner = this.userService.setOwner(this.owner)
            .subscribe((owners) => {
                this.owners = owners
            }, err => {
                this.errorMessage = err;
            });
          
    }


    getProducts() {
        var displayProduct = this.userService.getProduct()
            .subscribe((products) => {
                this.products = products
            }, err => {
                this.errorMessage = err;
            });
    }


    followProducts(productId:number) {
        this.following[productId] = true;
        var followProduct = this.userService.followProduct(productId)
            .subscribe((products) => {
                this.followProduct = products;
                this.getProducts();
            }, err => {
                this.errorMessage = err;
            });
    }


    unfollowProducts(productId: number) {
        this.following[productId] = false;
        var unfollowProduct = this.userService.unfollowProduct(productId)
            .subscribe((products) => {
                this.products = products;
                this.getProducts();
            }, err => {
                this.errorMessage = err;
            });
    }


    followedProducts() {
        this.followedProduct = !this.followedProduct;
        this.beOwner = false;
        this.addedProduct = false;

        var followedProduct = this.userService.followedProduct()
            .subscribe((products) => {
                this.FollowedProduct = products;
            }, err => {
                this.errorMessage = err;
            });
    }

}