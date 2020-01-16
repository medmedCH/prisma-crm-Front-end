import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/back/', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: ''},
  {path: '/back/products', title: 'Products', icon: 'ni-app text-blue', class: ''},
  {path: '/back/orders', title: 'Orders', icon: 'ni-basket text-orange', class: ''},
  {path: '/back/carts', title: 'Carts', icon: 'ni-bag-17 text-yellow', class: ''},
  {path: '/back/quotations', title: 'Quotations', icon: 'ni-send text-red', class: ''},
  {path: '/back/Recettes', title: 'Recettes', icon: 'ni-single-copy-04 text-info', class: ''}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
