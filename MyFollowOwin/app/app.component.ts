import { Component } from '@angular/core';
import {OwnerButtonComponent} from './enduser/ownerbutton.component';

@Component({
      selector: 'my-app',
      template: `<h1>{{pageTitle}}</h1>
                  <my-button> </my-button>`,

      directives:[OwnerButtonComponent]
})
export class AppComponent {

    pageTitle: string = 'My Follow';

}
