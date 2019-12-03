import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./front/front.module').then(m => m.FrontModule)
  },
  {
    path: 'dash',
    loadChildren: () => import('./back/back.module').then(m => m.BackModule)
  },
  /*{
    path: '**',
    loadChildren: './front/front.module#FrontModule'
  }*/
];
export const ROUTING = RouterModule.forRoot(routes);
