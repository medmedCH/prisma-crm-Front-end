import {RouterModule, Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {AuthGuard} from './services/security/auth.guard';

const routes: Routes = [

  {
    path: '',
    loadChildren: './front/front.module#FrontModule'
  },
  {
    path: 'dash',
    loadChildren: './back/back.module#BackModule',
    canActivateChild: [AuthGuard]
  },
  {
    path: '**',
    loadChildren: './front/front.module#FrontModule'
  }
];
export const ROUTING = RouterModule.forRoot(routes);
