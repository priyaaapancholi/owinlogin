import { Component } from '@angular/core';

@Component({
    selector: 'my-button',
    templateUrl: 'app/enduser/ownerbutton.component.html'
})
export class OwnerButtonComponent {

    beOwner : boolean=false;


    showForm(): void{

        this.beOwner = !this.beOwner;
    }
}
