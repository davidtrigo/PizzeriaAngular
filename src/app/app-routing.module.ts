import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuardService } from '@pizzeria/user';

const routes: Routes = [
   {
    path: '',
    loadChildren: () => import('projects/pizzas').then(m => m.PizzasSharedModule),
    pathMatch: 'full'
  }, 
/*   {
    path: 'pizzas',
    loadChildren: () => import('projects/pizzas').then(m => m.PizzasSharedModule),
  }, */
  {
    path: 'register',
   loadChildren: () => import('projects/register').then(m => m.RegisterSharedModule),
  },
  {
    path: 'login',
   loadChildren: () => import('projects/login').then(m => m.LoginSharedModule),
  },
  {
    path: 'ingredients',
    loadChildren: () => import('projects/ingredients').then(m => m.IngredientsSharedModule),
    canActivate: [UserGuardService],
    data: { role: 'admin' }
  }, 
  {
    path: '**',
    redirectTo: '/'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
