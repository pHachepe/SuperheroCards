import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuperheroesComponent } from './containers/list-superheroes/list-superheroes.component';
import { SuperheroCreatePageComponent } from './containers/superhero-create-page/superhero-create-page.component';
import { SuperheroEditPageComponent } from './containers/superhero-edit-page/superhero-edit-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListSuperheroesComponent },
  { path: 'edit/:id', component: SuperheroEditPageComponent },
  { path: 'create', component: SuperheroCreatePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperheroesRoutingModule {}
