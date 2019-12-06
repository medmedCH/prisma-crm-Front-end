import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ROUTING} from './app.routing';
// import {ComponentsModule} from './components/components.module';
import {LoginService} from './services/security/login.service';
import {StorageServiceModule} from 'angular-webstorage-service';
import {FrontModule} from './front/front.module';
import {BackModule} from './back/back.module';
import {AuthIntercepter} from './services/security/auth.intercepter';
import { ReactiveFormsModule } from '@angular/forms';
import {CartsService} from './services/carts.service';
import {NgxPayPalModule} from 'ngx-paypal';

@NgModule({
  imports: [
    FrontModule,
    BackModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ROUTING,
    StorageServiceModule,
    ReactiveFormsModule,
    NgxPayPalModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
  ],
  providers: [
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthIntercepter,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
