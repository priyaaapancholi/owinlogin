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
var product_1 = require('./product');
var users_service_1 = require('./users.service');
var OwnerLoginComponent = (function () {
    function OwnerLoginComponent(userservice) {
        this.userservice = userservice;
        this.addProduct = false;
        this.addedProduct = false;
        this.editProduct = false;
        this.products = new Array();
        this.product = new product_1.Product();
    }
    OwnerLoginComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    OwnerLoginComponent.prototype.getProducts = function () {
        var _this = this;
        var displayProduct = this.userservice.getProduct()
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
        return displayProduct;
    };
    OwnerLoginComponent.prototype.showForm = function () {
        this.addProduct = !this.addProduct;
        this.editProduct = false;
        this.addedProduct = false;
    };
    OwnerLoginComponent.prototype.showProduct = function () {
        this.addedProduct = !this.addedProduct;
        this.editProduct = false;
        this.addProduct = false;
    };
    OwnerLoginComponent.prototype.editForm = function (product) {
        this.product = product;
        this.editProduct = !this.editProduct;
        //this.addedProduct = false;
        this.addProduct = false;
    };
    OwnerLoginComponent.prototype.onSubmit = function (product) {
        var _this = this;
        var postProduct = this.userservice.setProduct(this.product)
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    OwnerLoginComponent.prototype.onDelete = function (product) {
        var _this = this;
        return this.userservice.deleteProduct(product)
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    OwnerLoginComponent.prototype.onEdit = function (product) {
        var _this = this;
        return this.userservice.editProduct(product)
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    OwnerLoginComponent = __decorate([
        core_1.Component({
            selector: 'my-owner',
            templateUrl: 'app/Owner/ownerlogin.component.html',
            providers: [users_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [users_service_1.UserService])
    ], OwnerLoginComponent);
    return OwnerLoginComponent;
}());
exports.OwnerLoginComponent = OwnerLoginComponent;
//# sourceMappingURL=ownerlogin.component.js.map