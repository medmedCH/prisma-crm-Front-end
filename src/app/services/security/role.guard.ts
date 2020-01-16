import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {StorageService} from './storage.service';

// import {LoginService} from './login.service';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(
    private router: Router,
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem('userToken') != null) {
      const roles = next.data['roles'] as Array<string>;
      if (roles) {
        const user = StorageService.get('currentUser');

        const match = roles.indexOf(user.role);
        if (match != null) {
          this.router.navigate(['/faq']);
        } else {
          this.router.navigate(['/faq']);
          return false;
        }
      } else {
        return true;
      }
    }
    this.router.navigate(['/login']);
    return false;
  }
}
