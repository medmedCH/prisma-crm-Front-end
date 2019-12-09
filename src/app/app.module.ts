import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';

import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ROUTING} from './app.routing';
import {LoginService} from './services/security/login.service';
import {StorageServiceModule} from 'angular-webstorage-service';
import {FrontModule} from './front/front.module';
import {BackModule} from './back/back.module';
import {AuthIntercepter} from './services/security/auth.intercepter';
import {ReactiveFormsModule} from '@angular/forms';
import {RoleGuard} from './services/security/role.guard';
import {AlertService} from './services/common/AlerteService';
import {UsersService} from './services/managers/users.service';
import {BrowserModule} from '@angular/platform-browser';
import {
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';
import {Toast, ToastrModule} from 'ngx-toastr';
@NgModule({
  imports: [
    FrontModule,
    BackModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ROUTING,
    StorageServiceModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    ToastrModule.forRoot() // ToastrModule added

  ],
  declarations: [
    AppComponent,

    AdminLayoutComponent,
    AuthLayoutComponent,
  ],
  providers: [
    LoginService,
    RoleGuard,
    AlertService,
    UsersService,
    Toast,
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
