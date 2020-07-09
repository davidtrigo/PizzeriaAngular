import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  },
  {
    path: 'register',
    loadChildren: () => import('../../../register').then(m => m.RegisterSharedModule),
  }
];

function getRoutes(shared: boolean = false): Routes {
  return shared ? sharedRoutes : routes
}

/* @NgModule({
  imports: [RouterModule.forChild(getRoutes(true))],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
 */

@NgModule({})
export class Routing {
  static getRouting(shared: boolean = false): ModuleWithProviders<RouterModule> {
    return RouterModule.forChild(getRoutes(shared))
    /* return {
      ngModule: RouterModule.forChild(getRoutes(shared)),
      providers: []
    } */
  }
}

/* export const getRouting = (shared: boolean = false): ModuleWithProviders => {


  return {
    ngModule: RegisterRoutingModule,
    providers: []
  }

} */