import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoresComponent } from './components/directores/directores.component';

const routes: Routes = [
{path: 'directores', component: DirectoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
