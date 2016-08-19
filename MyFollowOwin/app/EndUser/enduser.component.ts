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


    follows: Array<Follow>;
    follow: Follow;

    errorMessage: string;
    constructor(private userservice: UserService) {
        this.owners = new Array<Owner>();
        this.owner = new Owner();
    }

    ngOnInit() {
        this.getOwners();
        this.getProducts();
    }

    getOwners() {
        var displayOwner = this.userservice.getOwner()
            .subscribe((owners) => {
                this.owners = owners
            }, err => {
                this.errorMessage = err;
            });

        return displayOwner;
    }


   


    beOwner: boolean = false;
    showForm(): void{
        this.beOwner = !this.beOwner; 
        this.addedProduct = false;
    } 




    addedProduct: boolean = false;
    showProduct(): void {
        this.addedProduct = !this.addedProduct;
        this.beOwner = false;
        
    }



    onSubmit(owner: Owner) {

      
        var postOwner = this.userservice.setOwner(this.owner)
            .subscribe((owners) => {
                this.owners = owners
            }, err => {
                this.errorMessage = err;
            });
      
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


    hidebutton: any[] = [];
    followProducts(product: Product) {
        this.hidebutton[product.Id] = true;
        var followProduct = this.userservice.followProduct(product)
            .subscribe((products) => {
                this.products = products;
                this.getProducts();
            }, err => {
                this.errorMessage = err;
            });
       // 
       
    }





    //hidebutton: any[] = [];
    unfollowProducts(product:Product) {
        this.hidebutton[product.Id] = false;
        var unfollowProduct = this.userservice.unfollowProduct(product)
            .subscribe((products) => {
                this.products = products;
                this.getProducts();
            }, err => {
                this.errorMessage = err;
            });
        // 

    }
   

}