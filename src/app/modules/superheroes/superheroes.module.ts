import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from 'src/app/shared/shared.module';
import { SuperheroCardComponent } from './components/superhero-card/superhero-card.component';
import { SuperheroCreatePageComponent } from './containers/superhero-create-page/superhero-create-page.component';
import { SuperheroEditPageComponent } from './containers/superhero-edit-page/superhero-edit-page.component';
import { SuperheroListPageComponent } from './containers/superhero-list-page/superhero-list-page.component';
import { SuperheroesRoutingModule } from './superheroes-routing.module';

@NgModule({
  declarations: [
    SuperheroCardComponent,
    SuperheroCreatePageComponent,
    SuperheroEditPageComponent,
    SuperheroListPageComponent,
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
    MatButtonModule,
  ],
})
export class SuperheroesModule {}
