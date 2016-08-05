import { Component } from '@angular/core';
//import {UserComponent} from './users.component';
//import { bootstrap }    from '@angular/platform-browser-dynamic';
import {Http, HTTP_PROVIDERS, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-button',
    templateUrl: 'app/enduser/ownerbutton.component.html',

   
})
export class OwnerButtonComponent {
    //ucompo: UserComponent;
    //constructor(public http: Http) { }

    //getData() {
    //    this.http.get('http://localhost:53754/api/Test')

    //        .map(res =>res.json())
            

    //        .subscribe(data => {
    //            this.ucompo = data;
    //            console.log(this.ucompo);
    //        });

         

        
    //}






    beOwner: boolean = false;
    showForm(): void{

        this.beOwner = !this.beOwner;
    }
}


