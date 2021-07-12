import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { MeusDadosComponent } from './pages/meus-dados/meus-dados.component';
import { TransacoesComponent } from './pages/transacoes/transacoes.component';
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
  },
  {
  path: 'transacoes',
  component: TransacoesComponent
  },
  {
  path: 'meusdados',
  component: MeusDadosComponent
  },
  {
  path: 'extrato',
  component: ExtratoComponent
  },
  {
  path: 'categorias',
  component: CategoriasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
