import { Injectable }     from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Owner }          from './owner';
import { Product }          from './product';
import { ApplicationUser }          from './applicationuser';

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
    //private owner1Url = 'api/Owners1';
    constructor(private http: Http) { }


    getOwner() {
        return this.http.get(this.ownerUrl)
            .map(response => response.json());
       
    }

    getOwnerInfo() {
      return this.http.get(this.ownerUrl)
            .map(response => response.json());
        
       
    }

    setOwner(owner:Owner) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.ownerUrl, JSON.stringify(owner), { headers: headers })
            .map(res => res.json().data)         
    }


    UpdateOwnerState(owner: ApplicationUser) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });
       // console.log("put is invoked");
        return this.http.put(this.ownerUrl +'/'+ owner.Id, JSON.stringify(Owner), { headers: headers }).map(res => res.json());
    }



    getProduct() {
        return this.http.get(this.productUrl)
            .map(response => response.json());


    }

    setProduct(product: Product) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.productUrl, JSON.stringify(product), { headers: headers })
            .map(res => res.json().data)
    }


    deleteProduct(product: Product) {

        return this.http.delete(this.productUrl + '/' + product.Id).map(res => res.json());
    }




    editProduct(product: Product) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });
        // console.log("put is invoked");
        return this.http.put(this.productUrl + '/' + product.Id, JSON.stringify(product), { headers: headers }).map(res => res.json());
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
