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
var owner_1 = require('./../Owner/owner');
var BecomeOwnerComponent = (function () {
    function BecomeOwnerComponent(userService) {
        this.userService = userService;
        this.owners = new Array();
        this.owner = new owner_1.Owner();
    }
    BecomeOwnerComponent.prototype.onSubmit = function (owner) {
        var _this = this;
        var postOwner = this.userService.setOwner(owner)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () { _this.owner = new owner_1.Owner(); });
    };
    BecomeOwnerComponent = __decorate([
        core_1.Component({
            selector: 'beowner',
            templateUrl: 'app/EndUser/becomeOwner.component.html',
            providers: [users_service_1.UserService],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [users_service_1.UserService])
    ], BecomeOwnerComponent);
    return BecomeOwnerComponent;
}());
exports.BecomeOwnerComponent = BecomeOwnerComponent;
//# sourceMappingURL=becomeOwner.component.js.map