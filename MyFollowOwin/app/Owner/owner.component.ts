import {Component, /*OnInit*/} from '@angular/core';
import { Product, Platform}from './../Product/product';  
import { UserService }from './../users.service'; 
import { ProductUpdate }from './../ProductUpdate/productupdate';

@Component({
    selector: 'my-owner',
    templateUrl: 'app/Owner/owner.component.html',
    providers: [UserService]
})



export class OwnerLoginComponent /*implements OnInit*/{
    platforms = Platform;

    products: Array<Product>;
    allProducts: Array<Product>;
    product: Product;

    productUpdate: ProductUpdate;
    productUpdates: Array<ProductUpdate>;

    addedProduct: boolean = false;
    allProduct: boolean = false;
    addProduct: boolean = false;
    editProduct: boolean = false;
    deleteProduct: boolean = false;
    //updateProduct: boolean = false;
    following: any[] = [];
    errorMessage: string;

    constructor(private userService: UserService) {
        this.products = new Array<Product>();
        this.product = new Product();
    }

    //ngOnInit() {
    //    this.getProducts();
    //    this.getAllProducts();
    //}

    
    getProducts() {
        this.addedProduct = !this.addedProduct;
        this.editProduct = false;
        this.addProduct = false;
        this.allProduct = false;
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
        //this.updateProduct = false;
        var showProduct = this.userService.getAllProduct()
            .subscribe((products) => {
                this.allProducts = products
            }, err => {
                this.errorMessage = err;
            });

       
    }


    onSubmit(product: Product) {
       
        var postProduct = this.userService.setProduct(this.product)
            .subscribe((products) => {
                this.products = products
            }, err => {
                this.errorMessage = err;
            });
    }


    onDelete(productId: number) {
        this.deleteProduct = !this.deleteProduct;
        this.editProduct = false;
        this.addProduct = false;
        this.allProduct = false;
       
        return this.userService.deleteProduct(productId)
            .subscribe((products) => {
                this.products = products
            }, err => {
                this.errorMessage = err;
            });
    }


    editForm(product:Product) {
        
        return this.userService.editProduct(product)
            .subscribe((products) => {
                this.products = products
            }, err => {
                this.errorMessage = err;
            });
        
    }


   showForm(): void {
        this.addProduct = !this.addProduct;
        this.editProduct = false;
        this.addedProduct = false;
        this.allProduct = false;
        //this.updateProduct = false;
    }


    //addedProduct: boolean = false;
    //showProduct(): void {
    //    this.addedProduct = !this.addedProduct;
    //    this.editProduct = false;
    //    this.addProduct = false;
    //    this.allProduct = false;
    //}


    onEdit(product: Product): void {
        this.product = product;
        this.editProduct = !this.editProduct;
        //this.addedProduct = false;
        this.addProduct = false;
        this.allProduct = false;
        //this.updateProduct = false;
    }


    //allProduct: boolean = false;
    //showAllProduct(): void {
    //    this.allProduct = !this.allProduct;
    //    this.editProduct = false;
    //    this.addProduct = false;
    //    this.addedProduct = false;
    //}
 
    
    followProducts(productId: number) {
        this.following[productId] = true;
        var followProduct = this.userService.followProduct(productId)
            .subscribe((products) => {
                this.products = products;
                this.getAllProducts();
            }, err => {
                this.errorMessage = err;
            });
    }


    unfollowProducts(productId: number) {
        this.following[productId] = false;
        var unfollowProduct = this.userService.unfollowProduct(productId)
            .subscribe((products) => {
                this.products = products;
                this.getAllProducts();
            }, err => {
                this.errorMessage = err;
            });
    }


  
    //onUpdate(productId: number) {
    //    this.product.Id = productId;
    //    this.editProduct = false;
    //    //this.addedProduct = false;
    //    this.addProduct = false;
    //    this.allProduct = false;
    //    this.updateProduct = !this.updateProduct;
       
    //}


    //updateForm(product: Product) {

    //    return this.userService.updateProduct(product)
    //        .subscribe((products) => {
    //            this.products = products
    //        }, err => {
    //            this.errorMessage = err;
    //        });

    //}

}