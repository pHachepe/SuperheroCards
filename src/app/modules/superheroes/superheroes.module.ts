import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CreateSuperheroComponent } from './components/create-superhero/create-superhero.component';
import { EditSuperheroComponent } from './components/edit-superhero/edit-superhero.component';
import { ListSuperheroesComponent } from './components/list-superheroes/list-superheroes.component';
import { SuperHeroCardComponent } from './components/super-hero-card/super-hero-card.component';
import { SuperheroesRoutingModule } from './superheroes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ListSuperheroesComponent,
    EditSuperheroComponent,
    CreateSuperheroComponent,
    SuperHeroCardComponent,
  ],
  imports: [
    CommonModule,
    SuperheroesRoutingModule,
    MatIconModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    SharedModule,
  ],
})
export class SuperheroesModule {}
