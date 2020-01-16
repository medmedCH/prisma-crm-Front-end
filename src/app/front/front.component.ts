import {Component, OnInit} from '@angular/core';
import {User} from '../models/User';
import {UsersService} from '../services/managers/users.service';
import {Router} from '@angular/router';
import {StorageService} from '../services/security/storage.service';
import {ClientOrderModel} from '../models/orderModule/ClientOrderModel';
import {CartsService} from '../services/carts.service';
import {CartModel} from '../models/orderModule/CartModel';

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
  client = 2;
  clientOrders: Array<ClientOrderModel> = new Array<ClientOrderModel>();
  isEmpty = false;
  timingo;

  closeResult: string;
  currentCart = new CartModel;

  constructor(private UserService: UsersService, private router: Router, private service: CartsService) {
    if (StorageService.get('currentUser') != null ) {
      if (sessionStorage.getItem('cart') != null) {
        this.currentCart = <CartModel>JSON.parse(sessionStorage.getItem('cart'));
        this.service.getClientOrders(StorageService.get('currentUser').userId).subscribe(e => {
          this.clientOrders = e;
          console.log(e);
          this.isEmpty = true;
          sessionStorage.setItem('ordersToView', JSON.stringify(this.clientOrders));
        }, error => {
          console.log('errors have been passed');
        });
      }
    }
  }

  ngOnInit() {
    if (StorageService.get('currentUser') != null) {
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
