import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Superhero } from '../../models/superhero.model';
import { SuperheroService } from '../../services/superhero.service';

@Component({
  selector: 'app-superhero-edit-page',
  templateUrl: './superhero-edit-page.component.html',
})
export class SuperheroEditPageComponent implements OnInit {
  superhero$!: Observable<Superhero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private superheroService: SuperheroService
  ) {}

  ngOnInit(): void {
    this.superhero$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = parseInt(params.get('id') || '', 10);
        if (!id && !history.state.superhero) {
          console.error('Invalid ID: Loading superhero failed.');
          return of(null);
        }

        return history.state.superhero
          ? of(history.state.superhero)
          : this.superheroService.getSuperhero(id);
      })
    );
  }
}
