import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
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
import {ProductModule} from './back/product/product.module';
import {NotesClaimService} from './services/managers/notesClaim.service';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ErrorInterceptor} from './services/security/error.intercepter';
import {RecaptchaModule} from 'angular-google-recaptcha';
import {Toast, ToastrModule} from 'ngx-toastr';
import {UsersService} from './services/managers/users.service';
import {DatePipe} from '@angular/common';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    FrontModule,
    BackModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    ProductModule,
    ROUTING,
    StorageServiceModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    AngularFontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RecaptchaModule.forRoot({
      siteKey: '6LdD64gUAAAAAA2j1DVXp60KSuqPkb-ggK4GxWQs',
    }),

    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-left'
    })
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    LoginService,
    RoleGuard,
    AlertService,
    NotesClaimService,
    UsersService,
    Toast,
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthIntercepter,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    NgbActiveModal
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
