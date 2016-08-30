import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
import { UserService }from './../users.service';
import { Product, Platform }from './../Product/product';
import { ProductUpdate }from './../ProductUpdate/productupdate';
import {ImageUpload, ImageResult, ResizeOptions} from 'ng2-imageupload';

@Component({
    selector: 'addedproduct',
    templateUrl: 'app/Owner/addedproducts.component.html',
    providers: [UserService],
    directives: [ImageUpload,ROUTER_DIRECTIVES]
})

export class AddedProductComponent {
    platforms = Platform;

    product: Product;
    products: Array<Product>;

    productUpdate: ProductUpdate;
    productUpdates: Array<ProductUpdate>;
   
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

        this.getProducts();
    }


    getProducts() {
       
        var displayProduct = this.userService.getProduct()
            .subscribe((products) => {
                this.products = products

            }, err => {
                this.errorMessage = err;
            });


    }


   


    








    onDelete(productId: number) {
        this.deleteProduct = !this.deleteProduct;
        this.editProduct = false;
        
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




   

  



    onUpdate(productId: number) {
        this.pid = productId;
        this.updateProduct = !this.updateProduct;
        this.editProduct = false;
        
      
        this.view = false;


    }

    imageUpload(path: ImageResult) {
        this.productUpdate.Media = path.dataURL;
    }


    updateForm(productUpdate: ProductUpdate) {

        productUpdate.ProductId = this.pid;
        this.userService.updateProduct(productUpdate)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => { this.getProducts(); this.productUpdate = new ProductUpdate(); }

            );

    }

    
}