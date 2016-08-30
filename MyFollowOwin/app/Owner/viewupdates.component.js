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
var router_1 = require("@angular/router");
var users_service_1 = require('./../users.service');
var productupdate_1 = require('./../ProductUpdate/productupdate');
var ViewUpdatesComponent = (function () {
    function ViewUpdatesComponent(userService, activeRoute) {
        this.userService = userService;
        this.activeRoute = activeRoute;
        this.following = [];
        this.productUpdate = new productupdate_1.ProductUpdate();
        this.productUpdates = new Array();
    }
    ViewUpdatesComponent.prototype.ngOnInit = function () {
        this.productid = this.activeRoute.snapshot.params['id'];
        console.log(this.productid);
    };
    ViewUpdatesComponent.prototype.viewUpdates = function (productId) {
        var _this = this;
        //this.view = true;
        productId = this.productid;
        var viewProductUpdate = this.userService.viewProductUpdates(productId)
            .subscribe(function (productUpdates) {
            _this.productUpdates = productUpdates;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    ViewUpdatesComponent = __decorate([
        core_1.Component({
            selector: 'viewupdates',
            templateUrl: 'app/Owner/viewupdates.component.html',
            providers: [users_service_1.UserService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [users_service_1.UserService, router_1.ActivatedRoute])
    ], ViewUpdatesComponent);
    return ViewUpdatesComponent;
}());
exports.ViewUpdatesComponent = ViewUpdatesComponent;
//# sourceMappingURL=viewupdates.component.js.map