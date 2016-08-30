import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
import { UserService }from './../users.service';
import { Product, Platform}from './../Product/product';

@Component({
    selector: 'addproduct',
    templateUrl: 'app/Owner/addproducts.component.html',
    providers: [UserService],
    directives: [ROUTER_DIRECTIVES]
})

export class AddProductComponent {
    platforms = Platform;

    product: Product;
    products: Array<Product>;


    constructor(private userService: UserService) {
        this.products = new Array<Product>();
        this.product = new Product();
    }



    onSubmit(product: Product) {
        
        var postProduct = this.userService.setProduct(product)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => {this.product = new Product(); }

            );
    }
}