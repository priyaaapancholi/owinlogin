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
var productupdate_1 = require('./../ProductUpdate/productupdate');
var follow_1 = require('./../Follow/follow');
var ProductsComponent = (function () {
    function ProductsComponent(userService) {
        this.userService = userService;
        this.platforms = product_1.Platform;
        this.view = false;
        this.following = [];
        this.follow = new follow_1.Follow();
        this.follows = new Array();
        this.productUpdate = new productupdate_1.ProductUpdate();
        this.productUpdates = new Array();
        this.products = new Array();
        this.product = new product_1.Product();
        this.getAllProducts();
    }
    ProductsComponent.prototype.getAllProducts = function () {
        var _this = this;
        var showProduct = this.userService.getAllProduct()
            .subscribe(function (products) {
            _this.products = products;
            _this.followDetails();
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    ProductsComponent.prototype.viewUpdates = function (productId, productName) {
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
    ProductsComponent.prototype.followProducts = function (productId) {
        this.following[productId] = true;
        var followProduct = this.userService.followProduct(productId)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () {
        });
    };
    ProductsComponent.prototype.unfollowProducts = function (productId) {
        this.following[productId] = false;
        this.view = false;
        var unfollowProduct = this.userService.unfollowProduct(productId)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () {
        });
    };
    ProductsComponent.prototype.followDetails = function () {
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
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'products',
            templateUrl: 'app/Owner/products.component.html',
            providers: [users_service_1.UserService],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [users_service_1.UserService])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map