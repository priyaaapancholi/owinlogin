import { Component, OnInit } from '@angular/core';
import { Owner }from './../Owner/owner';
import { Product, Platform} from './../Product/product';
import { Follow }from './../Follow/follow';
import { UserService }from './../users.service';
import { ProductUpdate }from './../ProductUpdate/productupdate';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {BecomeOwnerComponent} from './../EndUser/becomeOwner.component';
import {GetProductsComponent} from './../EndUser/getproducts.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/EndUser/enduser.component.html',
    providers: [UserService],
    directives: [ROUTER_DIRECTIVES],
    precompile: [BecomeOwnerComponent, GetProductsComponent]
})



export class OwnerComponent {
   


}