import { Component, OnInit } from '@angular/core';
import { Owner }from './owner';
import { UserService }from './users.service';





@Component({
    selector: 'my-app',
    templateUrl: 'app/Owner/owner.component.html',
    providers: [UserService]
})



export class OwnerComponent implements OnInit {
    owners: Array<Owner>;
    owner: Owner;
    errorMessage: string;
    constructor(private userservice: UserService) {
        this.owners = new Array<Owner>();
        this.owner = new Owner();
    }

    ngOnInit() {
        this.getOwners();
    }

    getOwners() {
        var displayOwner = this.userservice.getOwner()
            .subscribe((owners) => {
                this.owners = owners
            }, err => {
                this.errorMessage = err;
            });

        return displayOwner;
    }


   


    beOwner: boolean = false;
    showForm(): void{
           this.beOwner = !this.beOwner; 
    } 



    onSubmit(owner: Owner) {
        var postOwner = this.userservice.setOwner(this.owner)
            .subscribe((owners) => {
                this.owners = owners
            }, err => {
                this.errorMessage = err;
            });
      
    }

    

}