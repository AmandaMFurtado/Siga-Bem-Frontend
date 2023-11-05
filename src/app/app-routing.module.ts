import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularFreteComponent } from './pages/calcular-frete/calcular-frete.component';

/**
 * Módulo de configuração de rotas da aplicação.
 */
const routes: Routes = [
  {path: '', redirectTo: 'calcular-frete',pathMatch: 'full' },
  {path: 'calcular-frete', component: CalcularFreteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
