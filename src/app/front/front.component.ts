import {Component} from '@angular/core';
import {StorageService} from '../services/security/storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent {
  title = 'argon-dashboard-angular';

  constructor(private router: Router) {}
  userLogged = StorageService.get('currentUser');
  logout() {
    this.router.navigateByUrl('/login');
    StorageService.clear('currentUser');
  }
}
