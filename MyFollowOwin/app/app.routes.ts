import { provideRouter, RouterConfig }  from '@angular/router';
import {BecomeOwnerComponent} from './EndUser/becomeOwner.component';
import {GetProductsComponent} from './EndUser/getproducts.component';
import {AddProductComponent} from './Owner/addproducts.component';
import {AddedProductComponent} from './Owner/addedproducts.component';
import {ProductsComponent} from './Owner/products.component';


const routes: RouterConfig = [
    {
        path: 'Login/EndUser/beowner',
        component: BecomeOwnerComponent
    },


    {
        path: 'Login/EndUser',
        component: GetProductsComponent
    },


    {
        path: 'Login/ProductOwner/addproduct',
        component: AddProductComponent
    },


    {
        path: 'Login/ProductOwner/addedproduct',
        component: AddedProductComponent
    },



    {
        path: 'Login/ProductOwner',
        component: ProductsComponent
    }

     


];


export const appRouterProviders = [
    provideRouter(routes)
];