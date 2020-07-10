import { Routes } from '@angular/router';
import { UserGuardService } from '@pizzeria/user';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { PizzaslistComponent } from './index/pizzaslist/pizzaslist.component';

export const routes: Routes = [
  {
    path: '',
    component: PizzaslistComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
];

export const sharedRoutes: Routes = [
  {
    path: '',
    component: PizzaslistComponent
  },
  {
    path: 'add',
    component: AddComponent,
    canActivate: [UserGuardService],
    data: { role: 'admin' }
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [UserGuardService],
    data: { role: 'admin' }
  },
];
