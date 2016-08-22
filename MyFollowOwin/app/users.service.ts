import { Injectable }     from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Owner }          from './Owner/owner';
import { Product }          from './Product/product';
import { ApplicationUser }  from './EndUser/applicationuser';
import { Follow }          from './Follow/follow';



// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable
// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';




@Injectable()
export class UserService {
    private ownerUrl = 'api/Owners';
    private productUrl = 'api/Products';
    private followUrl = 'api/Follows';
    //private owner1Url = 'api/Owners1';
    constructor(private http: Http) { }






    /*gets owner info in enduser.component.ts*/
    getOwner() {
        return this.http.get(this.ownerUrl)
            .map(response => response.json());
       
    }


    /*post owner details in existing application user database(enduser.component.ts)*/
    setOwner(owner: Owner) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.ownerUrl, JSON.stringify(owner), { headers: headers })
            .map(res => res.json().data)
    }


    /*to follow product(enduser.component.ts)*/
    followProduct(product: Product) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.followUrl + '/' + product.Id, JSON.stringify(product.Id), { headers: headers })
            .map(res => res.json().data)
    }


    /*to get the list of products(owner.component.ts)(enduser.component.ts)*/
    getProduct() {

        return this.http.get(this.productUrl).map(response => response.json());

    }


    /*to unfollow the product i.e whenever user unfollows the product it will be deleted from follow table(enduser.component.ts)*/
    unfollowProduct(product:Product) {

        return this.http.delete(this.followUrl + '/' + product.Id).map(res => res.json().data)  
       
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
            .post(this.productUrl, JSON.stringify(product), { headers: headers })
            .map(res => res.json().data)
    }


    /*to delete added product(owner.component.ts)*/
    deleteProduct(product: Product) {

        return this.http.delete(this.productUrl + '/' + product.Id).map(res => res.json());
    }


    /*to edit product details(owner.component.ts)*/
    editProduct(product: Product) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });
        // console.log("put is invoked");
        return this.http.put(this.productUrl + '/' + product.Id, JSON.stringify(product), { headers: headers }).map(res => res.json());
    }


    /**/
    getAllProduct() {

        return this.http.get(this.productUrl + '/1').map(response => response.json());

    }









    /*gets owners info i.e info of users that filled a form to become product_owner i.e
   to show the requests of users who want to become a product owner(admin.component.ts)*/
    getOwnerInfo() {
        return this.http.get(this.ownerUrl)
            .map(response => response.json());


    }


    /*to update owners state i.e once approve button is clicked end user will become a product owner and its role will be changed automatically.
    (admin.component.ts)*/
    UpdateOwnerState(owner: ApplicationUser) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });
        // console.log("put is invoked");
        return this.http.put(this.ownerUrl + '/' + owner.Id, JSON.stringify(Owner), { headers: headers }).map(res => res.json());
    }









    private handleError(error: any) {
       
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}






 //putOwner(owner: Owner) {
    //    let headers = new Headers({
    //        'Content-Type': 'application/json'
    //    });

    //    return this.http
    //        .post(this.ownerUrl, JSON.stringify(owner), { headers: headers })
    //        .map(res => res.json().data)
    //}


    //putOwner(owner: Owner) {
    //    let headers = new Headers({
    //        'Content-Type': 'application/json'
    //    });

    //    return this.http.put(this.ownerUrl, JSON.stringify(owner), { headers: headers })
    //      .map(res => res.json().data)
    //}


    //private extractData(res: Response) {
    //    let body = res.json();
    //    return body.data || {};
    //}
