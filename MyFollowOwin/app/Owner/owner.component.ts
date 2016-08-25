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

    product: Product;
    products: Array<Product>;
    allProducts: Array<Product>;
    

    productUpdate: ProductUpdate;
    productUpdates: Array<ProductUpdate>;
    
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
        this.view = false;
       
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
        this.addProduct = !this.addProduct;
        this.editProduct = false;
        this.addedProduct = false;
        this.allProduct = false;
        this.updateProduct = false;
        this.view = false;
    } 

    onSubmit(product: Product) {
        this.addProduct = false;
        var postProduct = this.userService.setProduct(product)
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
        this.view = true;
        
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
        this.updateProduct = false;
        this.view = true;
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
        this.view =false;
        var unfollowProduct = this.userService.unfollowProduct(productId)
            .subscribe((products) => {
                this.products = products;
                this.getAllProducts();
            }, err => {
                this.errorMessage = err;
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
        this.view = true;
       
       
    }

    
    updateForm(productUpdate: ProductUpdate) {

        productUpdate.ProductId = this.pid;
        this.userService.updateProduct(productUpdate)
            .subscribe((productUpdates) => {
                this.productUpdates = productUpdates
            }, err => {
                this.errorMessage = err;
            });

    }

}