//import { bootstrap }    from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import { Owner }from './owner';
import { OwnerService }from './owner.service';
//import { HTTP_PROVIDERS } from '@angular/http';

@Component({
    selector: 'my-admin',
    templateUrl: 'app/Owner/admin.component.html'

})

export class AdminComponent {

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
        var displayOwner = this.ownerservice.getOwnerInfo()
            .subscribe((owners) => {
                this.owners = owners
            }, err => {
                this.errorMessage = err;
            });
    }


}

//bootstrap(AdminComponent, [HTTP_PROVIDERS]);