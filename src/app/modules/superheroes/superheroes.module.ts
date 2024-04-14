import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperheroesRoutingModule } from './superheroes-routing.module';
import { ListSuperheroesComponent } from './components/list-superheroes/list-superheroes.component';
import { EditSuperheroComponent } from './components/edit-superhero/edit-superhero.component';
import { CreateSuperheroComponent } from './components/create-superhero/create-superhero.component';


@NgModule({
  declarations: [
    ListSuperheroesComponent,
    EditSuperheroComponent,
    CreateSuperheroComponent
  ],
  imports: [
    CommonModule,
    SuperheroesRoutingModule
  ]
})
export class SuperheroesModule { }
