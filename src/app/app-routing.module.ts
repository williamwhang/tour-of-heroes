import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesNotFoundComponent } from './core/components/pages-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard' , pathMatch: 'full'},
  {
    path: 'dashboard',
    loadChildren: () => 
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'heroes',
    loadChildren: () => 
      import('./heroes/heroes.module').then((m) => m.HeroesModule)
  },
  {
    path: '**',
    component: PagesNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
