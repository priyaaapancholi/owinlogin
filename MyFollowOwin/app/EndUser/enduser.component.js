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
var owner_1 = require('./../Owner/owner');
var product_1 = require('./../Product/product');
var users_service_1 = require('./../users.service');
var OwnerComponent = (function () {
    function OwnerComponent(userService) {
        this.userService = userService;
        this.platforms = product_1.Platform;
        this.beOwner = false;
        this.addedProduct = false;
        this.following = [];
        this.followedProduct = false;
        this.owners = new Array();
        this.owner = new owner_1.Owner();
    }
    OwnerComponent.prototype.ngOnInit = function () {
        //this.getOwners();
        this.getProducts();
    };
    //getOwners() {
    //    var displayOwner = this.userService.getOwner()
    //        .subscribe((owners) => {
    //            this.owners = owners
    //        }, err => {
    //            this.errorMessage = err;
    //        });
    //}
    OwnerComponent.prototype.showForm = function () {
        this.beOwner = !this.beOwner;
        this.addedProduct = false;
        this.followedProduct = false;
    };
    OwnerComponent.prototype.showProduct = function () {
        this.addedProduct = !this.addedProduct;
        this.beOwner = false;
        this.followedProduct = false;
    };
    OwnerComponent.prototype.onSubmit = function (owner) {
        var _this = this;
        var postOwner = this.userService.setOwner(this.owner)
            .subscribe(function (owners) {
            _this.owners = owners;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    OwnerComponent.prototype.getProducts = function () {
        var _this = this;
        var displayProduct = this.userService.getProduct()
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    OwnerComponent.prototype.followProducts = function (productId) {
        var _this = this;
        this.following[productId] = true;
        var followProduct = this.userService.followProduct(productId)
            .subscribe(function (products) {
            _this.followProduct = products;
            _this.getProducts();
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    OwnerComponent.prototype.unfollowProducts = function (productId) {
        var _this = this;
        this.following[productId] = false;
        var unfollowProduct = this.userService.unfollowProduct(productId)
            .subscribe(function (products) {
            _this.products = products;
            _this.getProducts();
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    OwnerComponent.prototype.followedProducts = function () {
        var _this = this;
        this.followedProduct = !this.followedProduct;
        this.beOwner = false;
        this.addedProduct = false;
        var followedProduct = this.userService.followedProduct()
            .subscribe(function (products) {
            _this.FollowedProduct = products;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    OwnerComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/EndUser/enduser.component.html',
            providers: [users_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [users_service_1.UserService])
    ], OwnerComponent);
    return OwnerComponent;
}());
exports.OwnerComponent = OwnerComponent;
//# sourceMappingURL=enduser.component.js.map