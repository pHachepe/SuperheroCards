import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSuperheroComponent } from './containers/create-superhero/create-superhero.component';
import { EditSuperheroComponent } from './containers/edit-superhero/edit-superhero.component';
import { ListSuperheroesComponent } from './containers/list-superheroes/list-superheroes.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListSuperheroesComponent },
  { path: 'edit/:id', component: EditSuperheroComponent },
  { path: 'create', component: CreateSuperheroComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperheroesRoutingModule {}
