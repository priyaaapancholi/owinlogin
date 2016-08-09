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
var owner_service_1 = require('./owner.service');
var OwnerComponent = (function () {
    function OwnerComponent(ownerservice) {
        this.ownerservice = ownerservice;
        this.beOwner = false;
        this.owners = new Array();
        this.owner = new owner_1.Owner();
    }
    OwnerComponent.prototype.ngOnInit = function () {
        this.getOwners();
    };
    OwnerComponent.prototype.getOwners = function () {
        var _this = this;
        var displayOwner = this.ownerservice.getOwner()
            .subscribe(function (owners) {
            _this.owners = owners;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    OwnerComponent.prototype.showForm = function () {
        this.beOwner = !this.beOwner;
    };
    OwnerComponent.prototype.onSubmit = function (owner) {
        var _this = this;
        var postOwner = this.ownerservice.setOwner(this.owner)
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
            providers: [owner_service_1.OwnerService]
        }), 
        __metadata('design:paramtypes', [owner_service_1.OwnerService])
    ], OwnerComponent);
    return OwnerComponent;
}());
exports.OwnerComponent = OwnerComponent;
//# sourceMappingURL=owner.component.js.map