import { bootstrap }    from '@angular/platform-browser-dynamic';
import { OwnerComponent } from './Owner/owner.component';
import { AdminComponent } from './Owner/admin.component';
//import { appRouterProviders } from './route';
import { HTTP_PROVIDERS } from '@angular/http';
bootstrap(OwnerComponent, [HTTP_PROVIDERS]);
bootstrap(AdminComponent, [HTTP_PROVIDERS]);