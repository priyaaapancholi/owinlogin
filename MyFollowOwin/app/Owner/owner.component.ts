import { Component, OnInit } from '@angular/core';
import { Owner }from './owner';
import { OwnerService }from './owner.service';





@Component({
    selector: 'my-app',
    templateUrl: 'app/Owner/owner.component.html',
    providers: [OwnerService]
})
export class OwnerComponent implements OnInit {
    owners: Array<Owner>;
    owner: Owner;
    errorMessage: string;
    constructor(private ownerservice: OwnerService) {
        this.owners = new Array<Owner>();
        this.owner = new Owner();
    }

    ngOnInit() {
        this.getOwners();
    }

    getOwners() {
        var displayOwner = this.ownerservice.getOwner()
            .subscribe((owners) => {
                this.owners = owners
            }, err => {
                this.errorMessage = err;
            });
    }

    beOwner: boolean = false;
    showForm(): void{
           this.beOwner = !this.beOwner; 
    } 



    onSubmit() {
        var postOwner = this.ownerservice.setOwner(this.owner)
            .subscribe((owners) => {
                this.owners = owners
            }, err => {
                this.errorMessage = err;
            });
      
    }

    //demoSubmit() {
    //    console.log(JSON.stringify(this.owner.CompanyName));
    //}


}