"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var owner_1 = require('./Owner/owner');
require('rxjs/add/operator/map');
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable
// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.
// Statics
//import 'rxjs/add/observable/throw';
//// Operators
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';
//import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/operator/toPromise';
var UserService = (function () {
    //private owner1Url = 'api/Owners1';
    function UserService(http) {
        this.http = http;
        this.ownerUrl = 'api/Owners';
        this.productUrl = 'api/Products';
        this.followUrl = 'api/Follows';
    }
    /*gets owner info in enduser.component.ts*/
    UserService.prototype.getOwner = function () {
        return this.http.get(this.ownerUrl)
            .map(function (response) { return response.json(); });
    };
    /*post owner details in existing application user database(enduser.component.ts)*/
    UserService.prototype.setOwner = function (owner) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.ownerUrl, JSON.stringify(owner), { headers: headers })
            .map(function (res) { return res.json().data; });
    };
    /*to follow product(enduser.component.ts)*/
    UserService.prototype.followProduct = function (product) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.followUrl + '/' + product.Id, JSON.stringify(product.Id), { headers: headers })
            .map(function (res) { return res.json().data; });
    };
    /*to get the list of products(owner.component.ts)(enduser.component.ts)*/
    UserService.prototype.getProduct = function () {
        return this.http.get(this.productUrl).map(function (response) { return response.json(); });
    };
    /*to unfollow the product i.e whenever user unfollows the product it will be deleted from follow table(enduser.component.ts)*/
    UserService.prototype.unfollowProduct = function (product) {
        return this.http.delete(this.followUrl + '/' + product.Id).map(function (res) { return res.json().data; });
    };
    /*to get the followed products for particular user(enduser.component.ts)*/
    UserService.prototype.followedProduct = function () {
        return this.http.get(this.productUrl + '/1').map(function (response) { return response.json(); });
    };
    /*to add new product in database(owner.component.ts)*/
    UserService.prototype.setProduct = function (product) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.productUrl, JSON.stringify(product), { headers: headers })
            .map(function (res) { return res.json().data; });
    };
    /*to delete added product(owner.component.ts)*/
    UserService.prototype.deleteProduct = function (product) {
        return this.http.delete(this.productUrl + '/' + product.Id).map(function (res) { return res.json(); });
    };
    /*to edit product details(owner.component.ts)*/
    UserService.prototype.editProduct = function (product) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
        });
        // console.log("put is invoked");
        return this.http.put(this.productUrl + '/' + product.Id, JSON.stringify(product), { headers: headers }).map(function (res) { return res.json(); });
    };
    /*to get products list(except its own products)for particular owner(owner.component.ts)*/
    UserService.prototype.getAllProduct = function () {
        return this.http.get(this.productUrl + '/1').map(function (response) { return response.json(); });
    };
    /*gets owners info i.e info of users that filled a form to become product_owner i.e
   to show the requests of users who want to become a product owner(admin.component.ts)*/
    UserService.prototype.getOwnerInfo = function () {
        return this.http.get(this.ownerUrl)
            .map(function (response) { return response.json(); });
    };
    /*to update owners state i.e once approve button is clicked end user will become a product owner and its role will be changed automatically.
    (admin.component.ts)*/
    UserService.prototype.updateOwnerState = function (owner) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
        });
        // console.log("put is invoked");
        return this.http.put(this.ownerUrl + '/' + owner.Id, JSON.stringify(owner_1.Owner), { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map