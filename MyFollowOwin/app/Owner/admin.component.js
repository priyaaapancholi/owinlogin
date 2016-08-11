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
var ProductOwner_1 = require('./ProductOwner');
var owner_service_1 = require('./owner.service');
var AdminComponent = (function () {
    function AdminComponent(ownerservice) {
        this.ownerservice = ownerservice;
        this.owners = new Array();
        this.owner = new ProductOwner_1.ProductOwner();
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getOwnersDetail();
    };
    AdminComponent.prototype.getOwnersDetail = function () {
        var _this = this;
        var displayInfo = this.ownerservice.getOwnerInfo()
            .subscribe(function (owners) {
            _this.owners = owners;
        }, function (err) {
            _this.errorMessage = err;
        });
        return displayInfo;
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'my-admin',
            templateUrl: 'app/Owner/admin.component.html',
            providers: [owner_service_1.OwnerService]
        }), 
        __metadata('design:paramtypes', [owner_service_1.OwnerService])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map