import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuardService } from 'projects/pizzeria/user';  //incorrecto?

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('projects/pizzas/src/app/pizzas.module').then(m => m.PizzasModule),
  },
  {
    path: 'pizzas',
    loadChildren: () => import('projects/pizzas/src/app/pizzas.module').then(m => m.PizzasModule),
  },

  {
    path: 'ingredients',
    loadChildren: () => import('projects/ingredients/src/app/ingredients.module').then(m => m.IngredientsModule),
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
