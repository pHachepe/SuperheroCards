import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperheroCreatePageComponent } from './containers/superhero-create-page/superhero-create-page.component';
import { SuperheroEditPageComponent } from './containers/superhero-edit-page/superhero-edit-page.component';
import { SuperheroListPageComponent } from './containers/superhero-list-page/superhero-list-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'create', component: SuperheroCreatePageComponent },
  { path: 'edit/:id', component: SuperheroEditPageComponent },
  { path: 'list', component: SuperheroListPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperheroesRoutingModule {}
