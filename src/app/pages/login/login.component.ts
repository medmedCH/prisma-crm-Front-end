import {Component, OnInit, OnDestroy, Inject} from '@angular/core';
import {LoginService} from '../../services/security/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  model: any = {};
  public data: any = [];
  returnUrl = '';

  errorMessage: string;

  constructor(private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute,
              private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    if (this.loginService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
    this.returnUrl = decodeURI(this.route.snapshot.queryParams['returnUrl'] || '/');
  }

  ngOnDestroy() {
  }

  Login() {
    this.loginService.login(this.model.email, this.model.password)
      .subscribe(
        (response: any) => {
              if (this.returnUrl) {this.router.navigateByUrl(this.returnUrl);
              } else {this.router.navigate(['/dash/claim']); }
            } ,
      error => console.log(error)
    );
  }
}
