import { Injectable }     from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Owner }          from './Owner/owner';
import { Product }          from './Product/product';
import { ProductUpdate }          from './ProductUpdate/productupdate';
import { ApplicationUser }  from './EndUser/applicationuser';
import { Follow }          from './Follow/follow';
import 'rxjs/add/operator/map';


 import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable
 //See node_module/rxjs/Rxjs.js
 //Import just the rxjs statics and operators we need for THIS app.
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';




@Injectable()
export class UserService {
    private ownerUrl = 'api/Owners';
    private productUrl = 'api/Products';
    private followUrl = 'api/Follows';
    private productUpdateUrl = 'api/ProductUpdates';
    //private owner1Url = 'api/Owners1';
    constructor(private http: Http) { }






    ///*gets owner info in enduser.component.ts*/
    //getOwner() {
    //    return this.http.get(this.ownerUrl)
    //        .map(response => response.json());
       
    //}


    /*post owner details in existing applicationuser database table(enduser.component.ts)*/
    setOwner(owner: Owner) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.ownerUrl, JSON.stringify(owner), { headers: headers })
            .map(res => res.json().data)
    }


    /*to follow product(enduser.component.ts)*/
    followProduct(productId: number) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.followUrl + '/' + productId, JSON.stringify(productId), { headers: headers });
           
    }


    /*to get the list of products(owner.component.ts)(enduser.component.ts)*/
    getProduct() {

        return this.http.get(this.productUrl).map(response => response.json());

    }


    /*to unfollow the product i.e whenever user unfollows the product it will be deleted from follow table(enduser.component.ts)*/
    unfollowProduct(productId:number) {

        return this.http.delete(this.followUrl + '/' + productId);  
       
    }


   
    /*to get the followed products for particular user(enduser.component.ts)*/
    followedProduct() { 

        return this.http.get(this.productUrl + '/1').map(response => response.json());

    }








    /*to add new product in database(owner.component.ts)*/
    setProduct(product: Product) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.productUrl, JSON.stringify(product), { headers: headers });
          
    }


    /*to delete added product(owner.component.ts)*/
    deleteProduct(productId: number) {

        return this.http.delete(this.productUrl + '/' + productId);
    }


    /*to edit product details(owner.component.ts)*/
    editProduct(product: Product) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });
        // console.log("put is invoked");
        return this.http.put(this.productUrl + '/' + product.Id, JSON.stringify(product), { headers: headers });
    }


    /*to get products list(except its own products)for particular owner(owner.component.ts)*/
    getAllProduct() {

        return this.http.get(this.productUrl + '/1').map(response => response.json());

    }


    /*to post the updates on productupdate table(owner.component.ts)*/
    updateProduct(productUpdate: ProductUpdate) {
        
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        
        return this.http
            .post(this.productUpdateUrl, JSON.stringify(productUpdate), { headers: headers });
            
     }


    
    viewProductUpdates(productId:number) {

        return this.http.get(this.productUpdateUrl + '/'+ productId).map(response => response.json());

    }













    /*gets owners info i.e info of users that filled a form to become product_owner i.e
   to show the requests of users who want to become a product owner(admin.component.ts)*/
    getOwnerInfo() {
        return this.http.get(this.ownerUrl)
            .map(response => response.json());


    }


    /*to update owners state i.e once approve button is clicked end user will become a product owner and its role will be changed automatically.
    (admin.component.ts)*/
    updateOwnerState(owner: ApplicationUser) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });
        // console.log("put is invoked");
        return this.http.put(this.ownerUrl + '/' + owner.Id, JSON.stringify(Owner), { headers: headers });
    }









    private handleError(error: any) {
       
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }


     


}






 