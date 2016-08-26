import {Component, /*OnInit*/} from '@angular/core';
import { Product, Platform}from './../Product/product';  
import { UserService }from './../users.service'; 
import { ProductUpdate }from './../ProductUpdate/productupdate';
import { Follow }from './../Follow/follow';

@Component({
    selector: 'my-owner',
    templateUrl: 'app/Owner/owner.component.html',
    providers: [UserService]
})



export class OwnerLoginComponent /*implements OnInit*/{
    platforms = Platform;

    product: Product;
    products: Array<Product>;
    allProducts: Array<Product>;
    

    productUpdate: ProductUpdate;
    productUpdates: Array<ProductUpdate>;

    follows: Array<Follow>;
    follow: Follow;
    
    addedProduct: boolean = false;
    allProduct: boolean = false;
    addProduct: boolean = false;
    editProduct: boolean = false;
    deleteProduct: boolean = false;
    updateProduct: boolean = false;
    view: boolean = false;
    pid: number;
    following: any[] = [];
    errorMessage: string;

    constructor(private userService: UserService) {
        this.products = new Array<Product>();
        this.product = new Product();
        this.productUpdate = new ProductUpdate();
        this.productUpdates = new Array<ProductUpdate>();
        this.follow = new Follow();
        this.follows = new Array<Follow>();
    }

    //ngOnInit() {
    //    this.getProducts();
    //    this.getAllProducts();
    //}

    
    getProducts() {
        this.addedProduct = true/*!this.addedProduct*/;
        this.editProduct = false;
        this.addProduct = false;
        this.allProduct = false;
        this.view = false;
        this.updateProduct = false;
        var displayProduct = this.userService.getProduct()
            .subscribe((products) => {
                this.products = products
                
            }, err => {
                this.errorMessage = err;
            });

      
    }

    
    getAllProducts() {
        this.allProduct = true;
        this.editProduct = false;
        this.addProduct = false;
        this.addedProduct = false;
        this.updateProduct = false;
        var showProduct = this.userService.getAllProduct()
            .subscribe((products) => {
                this.allProducts = products
                this.followDetails()
            }, err => {
                this.errorMessage = err;
            });

       
    }


    viewUpdates(productId:number) {
        this.view = true;
        //this.allProduct = false;
        this.editProduct = false;
        this.addProduct = false;
        this.updateProduct = false;
       

        var viewProductUpdate = this.userService.viewProductUpdates(productId)
            .subscribe((productUpdates) => {
                this.productUpdates = productUpdates
            }, err => {
                this.errorMessage = err;
            });
       
    }


  


    showForm(): void {
        this.addProduct = true;
        this.editProduct = false;
        this.addedProduct = false;
        this.allProduct = false;
        this.updateProduct = false;
        this.view = false;
    } 

    onSubmit(product: Product) {
        //this.addProduct = false;
        var postProduct = this.userService.setProduct(product)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => { this.addProduct= false; }

            );    
    }


    onDelete(productId: number) {
        this.deleteProduct = !this.deleteProduct;
        this.editProduct = false;
        this.addProduct = false;
        this.allProduct = false;
        this.view = false;
        
        return this.userService.deleteProduct(productId)
        .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => { this.getProducts(); }

            );    
        
    }



    onEdit(product: Product): void {
        this.product = product;
        this.editProduct = !this.editProduct;
        //this.addedProduct = false;
        this.addProduct = false;
        this.allProduct = false;
        this.updateProduct = false;
        this.view = false;
    }


    editForm(product: Product) {

        return this.userService.editProduct(product)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => { this.getProducts(); }

            );   

    }


 
    
    followProducts(productId: number) {
        this.following[productId] = true;
        var followProduct = this.userService.followProduct(productId)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => { this.getAllProducts(); }

            );    
    }


    unfollowProducts(productId: number) {
        this.following[productId] = false;
        this.view =false;
        var unfollowProduct = this.userService.unfollowProduct(productId)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => { this.getAllProducts(); }

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
                    this.following[follow.ProductId] = follow.Status;
                  
                }
            });
    }


    
    onUpdate(productId: number) {
        this.pid = productId;
        this.updateProduct = !this.updateProduct;
        //this.productUpdate.ProductId = productId;
        this.editProduct = false;
        //this.addedProduct = false;
        this.addProduct = false;
        this.allProduct = false;
        this.view = false;
       
       
    }

    

    updateForm(productUpdate: ProductUpdate) {

        productUpdate.ProductId = this.pid;
        this.userService.updateProduct(productUpdate)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => { this.getProducts(); }

            );   

    }

}