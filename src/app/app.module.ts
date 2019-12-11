import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';

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
import {ReactiveFormsModule} from '@angular/forms';
import {RoleGuard} from './services/security/role.guard';
import {AlertService} from './services/common/AlerteService';
import {ProductModule} from './back/product/product.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {BrowserModule} from '@angular/platform-browser';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
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
    BrowserModule, HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
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
  bootstrap: [AppComponent],
})
export class AppModule {
}
