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
var applicationuser_1 = require('./applicationuser');
var users_service_1 = require('./users.service');
var AdminComponent = (function () {
    function AdminComponent(userservice) {
        this.userservice = userservice;
        this.Click = false;
        this.owners = new Array();
        this.owner = new applicationuser_1.ApplicationUser();
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getOwnersDetail();
    };
    AdminComponent.prototype.getOwnersDetail = function () {
        var _this = this;
        var displayInfo = this.userservice.getOwnerInfo()
            .subscribe(function (owners) {
            _this.owners = owners;
            //console.log(owners);
        }, function (err) {
            _this.errorMessage = err;
        });
        return displayInfo;
    };
    AdminComponent.prototype.UpdateOwnerData = function () {
        var _this = this;
        this.userservice.UpdateOwnerState(this.owner)
            .subscribe(function (owners) {
            _this.owners = owners;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    AdminComponent.prototype.Approve = function (ownerId) {
        this.Click = true;
        this.owner.Id = ownerId;
        //this.owner.OwnerStates = 1;
        this.UpdateOwnerData();
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'my-admin',
            templateUrl: 'app/Owner/admin.component.html',
            providers: [users_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [users_service_1.UserService])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map