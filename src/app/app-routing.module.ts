import { HomeComponent } from './pages/home/home.component';
import { InvestimentosComponent } from './pages/investimentos/investimentos.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
  path: 'investimentos',
  component: InvestimentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
