import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbCardModule, NbIconModule, NbButtonModule, NbInputModule, NbSelectModule, NbTagModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { InvestimentosComponent } from './pages/investimentos/investimentos.component';
import { MenuComponent } from './shared/menu/menu.component';
import { TransacoesComponent } from './pages/transacoes/transacoes.component';
import { MeusDadosComponent } from './pages/meus-dados/meus-dados.component';
import { HttpClientModule } from '@angular/common/http';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { FormsModule } from '@angular/forms';
import { CategoriasComponent } from './pages/categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InvestimentosComponent,
    MenuComponent,
    TransacoesComponent,
    MeusDadosComponent,
    ExtratoComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    HttpClientModule,
    FormsModule,
    NbTagModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
