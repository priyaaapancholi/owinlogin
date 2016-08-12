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
var owner_1 = require('./owner');
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable
// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.
// Statics
require('rxjs/add/observable/throw');
// Operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
var OwnerService = (function () {
    //private owner1Url = 'api/Owners1';
    function OwnerService(http) {
        this.http = http;
        this.ownerUrl = 'api/Owners';
    }
    OwnerService.prototype.getOwner = function () {
        return this.http.get(this.ownerUrl)
            .map(function (response) { return response.json(); });
    };
    OwnerService.prototype.getOwnerInfo = function () {
        return this.http.get(this.ownerUrl)
            .map(function (response) { return response.json(); });
    };
    OwnerService.prototype.setOwner = function (owner) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.ownerUrl, JSON.stringify(owner), { headers: headers })
            .map(function (res) { return res.json().data; });
    };
    OwnerService.prototype.UpdateOwnerState = function (owner) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
        });
        console.log("put is invoked");
        return this.http.put(this.ownerUrl + '/' + owner.Id, JSON.stringify(owner_1.Owner), { headers: headers }).map(function (res) { return res.json(); });
    };
    OwnerService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    OwnerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OwnerService);
    return OwnerService;
}());
exports.OwnerService = OwnerService;
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
//# sourceMappingURL=owner.service.js.map