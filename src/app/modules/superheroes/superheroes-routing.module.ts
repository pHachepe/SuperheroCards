import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperheroCreatePageComponent } from './containers/superhero-create-page/superhero-create-page.component';
import { SuperheroEditPageComponent } from './containers/superhero-edit-page/superhero-edit-page.component';
import { SuperheroListPageComponent } from './containers/superhero-list-page/superhero-list-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'create',
    component: SuperheroCreatePageComponent,
    data: { animation: 'CreatePage' },
  },
  {
    path: 'edit/:id',
    component: SuperheroEditPageComponent,
    data: { animation: 'EditPage' },
  },
  {
    path: 'list',
    component: SuperheroListPageComponent,
    data: { animation: 'ListPage' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperheroesRoutingModule {}
