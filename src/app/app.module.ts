import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';

import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ROUTING} from './app.routing';
// import {ComponentsModule} from './components/components.module';
import {LoginService} from './services/security/login.service';
import {StorageServiceModule} from 'angular-webstorage-service';
import {FrontModule} from './front/front.module';
import {BackModule} from './back/back.module';
import {AuthIntercepter} from './services/security/auth.intercepter';
import { ReactiveFormsModule } from '@angular/forms';
import {RoleGuard} from './services/security/role.guard';
import {AlertService} from './services/common/AlerteService';
import {ErrorInterceptor} from './services/security/error.intercepter';
import {ProductModule} from './back/product/product.module';

// import {MatAutocompleteModule} from '@angular/material/autocomplete';




@NgModule({
  imports: [
    FrontModule,
    BackModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ProductModule,
    ROUTING,
    StorageServiceModule,
    ReactiveFormsModule,
    // MatAutocompleteModule,


  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    LoginService,
    RoleGuard,
    AlertService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthIntercepter,
      multi: true
    },
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
