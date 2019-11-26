import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: './front/front.module#FrontModule'
  },
  {
    path: 'dash',
    loadChildren: './back/back.module#BackModule'
  },
 /* {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  },*/
  {
    path: '**',
    loadChildren: './front/front.module#FrontModule'
  }
];
export const ROUTING = RouterModule.forRoot(routes);
