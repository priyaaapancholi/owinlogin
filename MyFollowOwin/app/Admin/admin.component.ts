import {Component, OnInit} from '@angular/core';
import { ApplicationUser }from './../EndUser/applicationuser';
import { UserService }from './../users.service';


@Component({
    selector: 'my-admin',
    templateUrl: 'app/Admin/admin.component.html',
    providers: [UserService]
})

export class AdminComponent implements OnInit {

    owners: Array<ApplicationUser>;
    owner: ApplicationUser;
    errorMessage: string;

    constructor(private userService: UserService) {
        this.owners = new Array<ApplicationUser>();
        this.owner = new ApplicationUser();
    }

    ngOnInit() {
        this.getOwnersDetail();
       
    }


    getOwnersDetail() {
     var displayInfo= this.userService.getOwnerInfo()
            .subscribe((owners) => {
                this.owners = owners
                //console.log(owners);
            }, err => {
                this.errorMessage = err;
            });
     }


     updateOwnerData() {
        this.userService.updateOwnerState(this.owner)
            .subscribe((owner) => {
                this.owners = owner
            },
            err => {
                this.errorMessage = err;
            });
    }


   
    approve(ownerId: number) {
        this.owner.Id = ownerId;
        this.updateOwnerData();
    }


}

