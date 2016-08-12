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
var owner_1 = require('./owner');
var users_service_1 = require('./users.service');
var OwnerComponent = (function () {
    function OwnerComponent(userservice) {
        this.userservice = userservice;
        this.beOwner = false;
        this.owners = new Array();
        this.owner = new owner_1.Owner();
    }
    OwnerComponent.prototype.ngOnInit = function () {
        this.getOwners();
    };
    OwnerComponent.prototype.getOwners = function () {
        var _this = this;
        var displayOwner = this.userservice.getOwner()
            .subscribe(function (owners) {
            _this.owners = owners;
        }, function (err) {
            _this.errorMessage = err;
        });
        return displayOwner;
    };
    OwnerComponent.prototype.showForm = function () {
        this.beOwner = !this.beOwner;
    };
    OwnerComponent.prototype.onSubmit = function (owner) {
        var _this = this;
        var postOwner = this.userservice.setOwner(this.owner)
            .subscribe(function (owners) {
            _this.owners = owners;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    OwnerComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/Owner/owner.component.html',
            providers: [users_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [users_service_1.UserService])
    ], OwnerComponent);
    return OwnerComponent;
}());
exports.OwnerComponent = OwnerComponent;
//# sourceMappingURL=owner.component.js.map