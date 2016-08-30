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
var users_service_1 = require('./../users.service');
var router_1 = require('@angular/router');
var addproducts_component_1 = require('./../Owner/addproducts.component');
var addedproducts_component_1 = require('./../Owner/addedproducts.component');
var products_component_1 = require('./../Owner/products.component');
var OwnerLoginComponent = (function () {
    function OwnerLoginComponent() {
    }
    OwnerLoginComponent = __decorate([
        core_1.Component({
            selector: 'my-owner',
            templateUrl: 'app/Owner/owner.component.html',
            providers: [users_service_1.UserService],
            directives: [router_1.ROUTER_DIRECTIVES],
            precompile: [addproducts_component_1.AddProductComponent, addedproducts_component_1.AddedProductComponent, products_component_1.ProductsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], OwnerLoginComponent);
    return OwnerLoginComponent;
}());
exports.OwnerLoginComponent = OwnerLoginComponent;
//# sourceMappingURL=owner.component.js.map