import { Routes } from '@angular/router';
import { LoginComponent } from './login.component'

const sharedRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  }
];
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    //outlet: 'loginapp'
  },
  {
    path: 'register',
    loadChildren: () => import('../../../register').then(m => m.RegisterSharedModule),
    //outlet: 'loginapp'
  }
];

export function getRoutes(shared: boolean = false): Routes {
  return shared ? sharedRoutes : routes
}
