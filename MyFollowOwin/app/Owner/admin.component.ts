import {Component,OnInit} from '@angular/core';
import { Owner }from './owner';
import { OwnerService }from './owner.service';


@Component({
    selector: 'my-admin',
    templateUrl: 'app/Owner/admin.component.html',
    providers: [OwnerService]
})

export class AdminComponent implements OnInit {

    owners: Array<Owner>;
    owner: Owner;
    errorMessage: string;
    constructor(private ownerservice: OwnerService) {
        this.owners = new Array<Owner>();
        this.owner = new Owner();
    }

    ngOnInit() {
        this.getOwnersDetail();
       
    }

    getOwnersDetail() {
        var displayInfo = this.ownerservice.getOwnerInfo()
            .subscribe((owners) => {
                this.owners = owners
            }, err => {
                this.errorMessage = err;
            });

       
        return displayInfo;

        
    }


}

