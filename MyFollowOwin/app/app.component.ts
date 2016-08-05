import { Component } from '@angular/core';
import {OwnerButtonComponent} from './enduser/ownerbutton.component';
//import {PostService} from './enduser/postservices';

@Component({
      selector: 'my-app',
      template: `<h1>{{pageTitle}}</h1>
                  <my-button> </my-button>`,
    
      directives: [OwnerButtonComponent],
      //providers: [PostService]
})
export class AppComponent {

    pageTitle: string = 'My Follow';

}
