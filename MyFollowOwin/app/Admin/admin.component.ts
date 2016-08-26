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
               
            }, err => {
                this.errorMessage = err;
            });
     }


    approve(ownerId: string) {
        this.owner.Id = ownerId;
        this.updateOwnerData();
    }

     updateOwnerData() {
        this.userService.approveOwner(this.owner)
             .subscribe(
             function (response) { console.log("Success Response" + response) },
             function (error) { console.log("Error happened" + error) },
             () => { this.getOwnersDetail(); }

             );        
    }




     decline(ownerId: string) {
         this.owner.Id = ownerId;
         this.declineOwnerData();
     }



     declineOwnerData() {
         this.userService.declineOwner(this.owner.Id)
            
             .subscribe(
             function (response) { console.log("Success Response" + response) },
             function (error) { console.log("Error happened" + error) },
             () => { this.getOwnersDetail(); }

             );
     }



   
}

