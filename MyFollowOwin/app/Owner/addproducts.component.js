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
var AddProductComponent = (function () {
    function AddProductComponent(userService) {
        this.userService = userService;
        this.platforms = product_1.Platform;
        this.products = new Array();
        this.product = new product_1.Product();
    }
    AddProductComponent.prototype.onSubmit = function (product) {
        var _this = this;
        var postProduct = this.userService.setProduct(product)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () { _this.product = new product_1.Product(); });
    };
    AddProductComponent = __decorate([
        core_1.Component({
            selector: 'addproduct',
            templateUrl: 'app/Owner/addproducts.component.html',
            providers: [users_service_1.UserService],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [users_service_1.UserService])
    ], AddProductComponent);
    return AddProductComponent;
}());
exports.AddProductComponent = AddProductComponent;
//# sourceMappingURL=addproducts.component.js.map