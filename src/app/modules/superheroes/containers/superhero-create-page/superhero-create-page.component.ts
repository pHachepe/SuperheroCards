import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { Superhero } from '../../models/superhero.model';
import { SuperheroService } from '../../services/superhero.service';

@Component({
  selector: 'app-superhero-create-page',
  templateUrl: './superhero-create-page.component.html',
})
export class SuperheroCreatePageComponent {
  constructor(
    private router: Router,
    private superheroService: SuperheroService
  ) {}

  createSuperhero(superhero: Superhero): void {
    this.superheroService
      .createSuperhero(superhero)
      .pipe(
        take(1),
        catchError((error) => {
          console.error('Failed to create superhero:', error);
          return of(null);
        })
      )
      .subscribe((result) => {
        if (result) {
          this.router.navigate(['/superheroes']);
        } else {
          console.error('Creation failed due to server error.');
        }
      });
  }
}
