import {Component,OnInit} from '@angular/core';
import { ProductOwner }from './ProductOwner';
import { OwnerService }from './owner.service';


@Component({
    selector: 'my-admin',
    templateUrl: 'app/Owner/admin.component.html',
    providers: [OwnerService]
})

export class AdminComponent implements OnInit {

    owners: Array<ProductOwner>;
    owner: ProductOwner;
    errorMessage: string;
    constructor(private ownerservice: OwnerService) {
        this.owners = new Array<ProductOwner>();
        this.owner = new ProductOwner();
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

