import {Component, OnInit} from '@angular/core';
import { ApplicationUser }from './../EndUser/applicationuser';
import { UserService }from './../users.service';


@Component({
    selector: 'my-admin',
    templateUrl: 'app/Owner/admin.component.html',
    providers: [UserService]
})

export class AdminComponent implements OnInit {

    owners: Array<ApplicationUser>;
    owner: ApplicationUser;
    errorMessage: string;
    constructor(private userservice: UserService) {
        this.owners = new Array<ApplicationUser>();
        this.owner = new ApplicationUser();
    }

    ngOnInit() {
        this.getOwnersDetail();
       
    }

    getOwnersDetail() {
     var displayInfo= this.userservice.getOwnerInfo()
            .subscribe((owners) => {
                this.owners = owners
                //console.log(owners);
            }, err => {
                this.errorMessage = err;
            });
             
        return displayInfo;
     }



    UpdateOwnerData() {
        this.userservice.UpdateOwnerState(this.owner)
            .subscribe((owners) => {
                this.owners = owners
            },
            err => {
                this.errorMessage = err;
            });
    }


    Click: boolean = false;
    Approve(ownerId: number) {
        this.Click= true;
        this.owner.Id = ownerId;
        //this.owner.OwnerStates = 1;
        this.UpdateOwnerData();
    }


}

