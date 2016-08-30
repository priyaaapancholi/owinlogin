import {Component, /*OnInit*/} from '@angular/core';
import { Product, Platform}from './../Product/product';  
import { UserService }from './../users.service'; 
import { ProductUpdate }from './../ProductUpdate/productupdate';
import { Follow }from './../Follow/follow';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {AddProductComponent} from './../Owner/addproducts.component';
import {AddedProductComponent} from './../Owner/addedproducts.component';
import {ProductsComponent} from './../Owner/products.component';


@Component({
    selector: 'my-owner',
    templateUrl: 'app/Owner/owner.component.html',
    providers: [UserService],
    directives: [ROUTER_DIRECTIVES],
    precompile: [AddProductComponent, AddedProductComponent, ProductsComponent]
})



export class OwnerLoginComponent{
   
}