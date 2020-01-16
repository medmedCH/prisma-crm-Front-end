import {Component, OnInit} from '@angular/core';
import {User} from '../models/User';
import {UsersService} from '../services/managers/users.service';
import {Router} from '@angular/router';
import {StorageService} from '../services/security/storage.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {
  title = 'argon-dashboard-angular';
  logged: User;
  bool = false;
  userLogged = StorageService.get('currentUser');

  constructor(private UserService: UsersService, private router: Router) {

  }

  ngOnInit() {
    this.UserService.GetLoggedUser(StorageService.get('currentUser').userId)
      .subscribe(
        response => {
          console.log(response);
          // tslint:disable-next-line:no-unused-expression
          this.logged = response;
        },
        error => {
          console.log(error);
        }
      );
  }

  logout() {
    StorageService.clear('currentUser');
    this.router.navigate(['/login']);
  }

  showDropdown() {
    if (this.bool === false ) {
      this.bool = true;
    } else {
      this.bool = false;
    }
  }
}
