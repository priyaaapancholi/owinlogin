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
var ng2_imageupload_1 = require('ng2-imageupload');
var AddedProductComponent = (function () {
    function AddedProductComponent(userService) {
        this.userService = userService;
        this.platforms = product_1.Platform;
        this.editProduct = false;
        this.deleteProduct = false;
        this.updateProduct = false;
        this.view = false;
        this.following = [];
        this.products = new Array();
        this.product = new product_1.Product();
        this.productUpdate = new productupdate_1.ProductUpdate();
        this.productUpdates = new Array();
        this.getProducts();
    }
    AddedProductComponent.prototype.getProducts = function () {
        var _this = this;
        var displayProduct = this.userService.getProduct()
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    AddedProductComponent.prototype.onDelete = function (productId) {
        var _this = this;
        this.deleteProduct = !this.deleteProduct;
        this.editProduct = false;
        this.view = false;
        return this.userService.deleteProduct(productId)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () { _this.getProducts(); });
    };
    AddedProductComponent.prototype.onEdit = function (product) {
        this.product = product;
        this.editProduct = !this.editProduct;
        this.updateProduct = false;
        this.view = false;
    };
    AddedProductComponent.prototype.editForm = function (product) {
        var _this = this;
        return this.userService.editProduct(product)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () { _this.getProducts(); });
    };
    AddedProductComponent.prototype.onUpdate = function (productId) {
        this.pid = productId;
        this.updateProduct = !this.updateProduct;
        this.editProduct = false;
        this.view = false;
    };
    AddedProductComponent.prototype.imageUpload = function (path) {
        this.productUpdate.Media = path.dataURL;
    };
    AddedProductComponent.prototype.updateForm = function (productUpdate) {
        var _this = this;
        productUpdate.ProductId = this.pid;
        this.userService.updateProduct(productUpdate)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () { _this.getProducts(); _this.productUpdate = new productupdate_1.ProductUpdate(); });
    };
    AddedProductComponent = __decorate([
        core_1.Component({
            selector: 'addedproduct',
            templateUrl: 'app/Owner/addedproducts.component.html',
            providers: [users_service_1.UserService],
            directives: [ng2_imageupload_1.ImageUpload, router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [users_service_1.UserService])
    ], AddedProductComponent);
    return AddedProductComponent;
}());
exports.AddedProductComponent = AddedProductComponent;
//# sourceMappingURL=addedproducts.component.js.map