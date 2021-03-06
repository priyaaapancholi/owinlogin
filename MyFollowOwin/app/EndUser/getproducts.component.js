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
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var users_service_1 = require('./../users.service');
var product_1 = require('./../Product/product');
var follow_1 = require('./../Follow/follow');
var productupdate_1 = require('./../ProductUpdate/productupdate');
var GetProductsComponent = (function () {
    function GetProductsComponent(userService) {
        this.userService = userService;
        this.platforms = product_1.Platform;
        this.view = false;
        this.following = [];
        this.products = new Array();
        this.product = new product_1.Product();
        this.productUpdate = new productupdate_1.ProductUpdate();
        this.productUpdates = new Array();
        this.follow = new follow_1.Follow();
        this.follows = new Array();
        this.getProducts();
    }
    GetProductsComponent.prototype.getProducts = function () {
        var _this = this;
        var displayProduct = this.userService.getProduct()
            .subscribe(function (products) {
            _this.products = products;
            _this.followDetails();
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    GetProductsComponent.prototype.viewUpdates = function (productId, productName) {
        var _this = this;
        this.view = true;
        this.product.ProductName = productName;
        var viewProductUpdate = this.userService.viewProductUpdates(productId)
            .subscribe(function (productUpdates) {
            _this.productUpdates = productUpdates;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    GetProductsComponent.prototype.followProducts = function (productId) {
        this.following[productId] = true;
        this.follow.UserStatusBit = true;
        //this.product.Id = productId;
        var followProduct = this.userService.followProduct(productId)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () {
        });
    };
    GetProductsComponent.prototype.unfollowProducts = function (productId) {
        this.view = false;
        this.following[productId] = false;
        var unfollowProduct = this.userService.unfollowProduct(productId)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () {
        });
    };
    GetProductsComponent.prototype.followDetails = function () {
        var _this = this;
        this.userService.getFollowStatus()
            .subscribe(function (follow) {
            _this.follows = follow;
        }, function (err) {
            _this.errorMessage = err;
        }, function () {
            for (var _i = 0, _a = _this.follows; _i < _a.length; _i++) {
                var follow = _a[_i];
                _this.following[follow.ProductId] = true;
            }
        });
    };
    GetProductsComponent = __decorate([
        core_1.Component({
            selector: 'getproducts',
            templateUrl: 'app/EndUser/getproducts.component.html',
            providers: [users_service_1.UserService],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [users_service_1.UserService])
    ], GetProductsComponent);
    return GetProductsComponent;
}());
exports.GetProductsComponent = GetProductsComponent;
//# sourceMappingURL=getproducts.component.js.map