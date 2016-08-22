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
var product_1 = require('./../Product/product');
var users_service_1 = require('./../users.service');
var OwnerLoginComponent /*implements OnInit*/ = (function () {
    function OwnerLoginComponent /*implements OnInit*/(userservice) {
        this.userservice = userservice;
        this.platforms = product_1.Platform;
        //ngOnInit() {
        //    this.getProducts();
        //}
        this.addedProduct = false;
        this.allProduct = false;
        this.addProduct = false;
        //addedProduct: boolean = false;
        //showProduct(): void {
        //    this.addedProduct = !this.addedProduct;
        //    this.editProduct = false;
        //    this.addProduct = false;
        //    this.allProduct = false;
        //}
        this.editProduct = false;
        this.products = new Array();
        this.product = new product_1.Product();
    }
    OwnerLoginComponent /*implements OnInit*/.prototype.getProducts = function () {
        var _this = this;
        this.addedProduct = !this.addedProduct;
        this.editProduct = false;
        this.addProduct = false;
        this.allProduct = false;
        var displayProduct = this.userservice.getProduct()
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
        return displayProduct;
    };
    OwnerLoginComponent /*implements OnInit*/.prototype.getAllProducts = function () {
        var _this = this;
        this.allProduct = !this.allProduct;
        this.editProduct = false;
        this.addProduct = false;
        this.addedProduct = false;
        var showProduct = this.userservice.getAllProduct()
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
        //return showProduct;
    };
    OwnerLoginComponent /*implements OnInit*/.prototype.onSubmit = function (product) {
        var _this = this;
        this.addProduct = false;
        var postProduct = this.userservice.setProduct(this.product)
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    OwnerLoginComponent /*implements OnInit*/.prototype.onDelete = function (product) {
        var _this = this;
        return this.userservice.deleteProduct(product)
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    OwnerLoginComponent /*implements OnInit*/.prototype.onEdit = function (product) {
        var _this = this;
        return this.userservice.editProduct(product)
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    OwnerLoginComponent /*implements OnInit*/.prototype.showForm = function () {
        this.addProduct = !this.addProduct;
        this.editProduct = false;
        this.addedProduct = false;
    };
    OwnerLoginComponent /*implements OnInit*/.prototype.editForm = function (product) {
        this.product = product;
        this.editProduct = !this.editProduct;
        //this.addedProduct = false;
        this.addProduct = false;
        this.allProduct = false;
    };
    OwnerLoginComponent /*implements OnInit*/ = __decorate([
        core_1.Component({
            selector: 'my-owner',
            templateUrl: 'app/Owner/owner.component.html',
            providers: [users_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [users_service_1.UserService])
    ], OwnerLoginComponent /*implements OnInit*/);
    return OwnerLoginComponent /*implements OnInit*/;
}());
exports.OwnerLoginComponent /*implements OnInit*/ = OwnerLoginComponent /*implements OnInit*/;
//# sourceMappingURL=owner.component.js.map