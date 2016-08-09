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
//import { bootstrap }    from '@angular/platform-browser-dynamic';
var core_1 = require('@angular/core');
var owner_1 = require('./owner');
var owner_service_1 = require('./owner.service');
//import { HTTP_PROVIDERS } from '@angular/http';
var AdminComponent = (function () {
    function AdminComponent(ownerservice) {
        this.ownerservice = ownerservice;
        this.owners = new Array();
        this.owner = new owner_1.Owner();
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getOwnersDetail();
    };
    AdminComponent.prototype.getOwnersDetail = function () {
        var _this = this;
        var displayOwner = this.ownerservice.getOwnerInfo()
            .subscribe(function (owners) {
            _this.owners = owners;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'my-admin',
            templateUrl: 'app/Owner/admin.component.html'
        }), 
        __metadata('design:paramtypes', [owner_service_1.OwnerService])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//bootstrap(AdminComponent, [HTTP_PROVIDERS]); 
//# sourceMappingURL=admin.component.js.map