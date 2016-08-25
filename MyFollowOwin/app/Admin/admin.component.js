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
var applicationuser_1 = require('./../EndUser/applicationuser');
var users_service_1 = require('./../users.service');
var AdminComponent = (function () {
    function AdminComponent(userService) {
        this.userService = userService;
        this.owners = new Array();
        this.owner = new applicationuser_1.ApplicationUser();
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getOwnersDetail();
    };
    AdminComponent.prototype.getOwnersDetail = function () {
        var _this = this;
        var displayInfo = this.userService.getOwnerInfo()
            .subscribe(function (owners) {
            _this.owners = owners;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    AdminComponent.prototype.approve = function (ownerId) {
        this.owner.Id = ownerId;
        this.updateOwnerData();
    };
    AdminComponent.prototype.updateOwnerData = function () {
        var _this = this;
        this.userService.approveOwner(this.owner)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () { _this.getOwnersDetail(); });
    };
    AdminComponent.prototype.decline = function (ownerId) {
        this.owner.Id = ownerId;
        this.declineOwnerData();
    };
    AdminComponent.prototype.declineOwnerData = function () {
        var _this = this;
        this.userService.declineOwner(this.owner.Id)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () { _this.getOwnersDetail(); });
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'my-admin',
            templateUrl: 'app/Admin/admin.component.html',
            providers: [users_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [users_service_1.UserService])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map