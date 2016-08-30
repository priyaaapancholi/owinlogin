import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
import { UserService }from './../users.service';
import { Owner }from './../Owner/owner';

@Component({
    selector: 'beowner',
    templateUrl: 'app/EndUser/becomeOwner.component.html',
    providers: [UserService],
    directives: [ROUTER_DIRECTIVES]
})

export class BecomeOwnerComponent{

    owners: Array<Owner>;
    owner: Owner;



    constructor(private userService: UserService) {
        this.owners = new Array<Owner>();
        this.owner = new Owner();
    }



    onSubmit(owner: Owner) {

        var postOwner = this.userService.setOwner(owner)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => { this.owner = new Owner(); }

            );
    }
}