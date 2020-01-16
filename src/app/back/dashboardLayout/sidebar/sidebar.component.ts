import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StorageService} from '../../../services/security/storage.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/product/all', title: 'Products', icon: 'ni-circle-08 text-pink', class: ''},
  {path: '/product/showstore', title: 'Store', icon: 'ni-circle-08 text-pink', class: ''},
  {path: '/promotion/show', title: 'Promotion', icon: 'ni-tv-2 text-primary', class: ''},
  {path: '/pack/affiche', title: 'Pack', icon: 'ni-tv-2 text-primary', class: ''},
  {path: '/offre/show', title: 'Offre', icon: 'ni-tv-2 text-primary', class: ''},
  {path: '/dash/claim', title: 'Réclamations', icon: 'ni-planet text-blue', class: ''},
  // {path: '/dash/scoringAgent', title: 'Scoring agents', icon: 'ni-pin-3 text-orange', class: ''},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  userLoggedRole = StorageService.get('currentUser').role;
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
