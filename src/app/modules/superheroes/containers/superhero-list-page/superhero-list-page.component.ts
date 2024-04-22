import { Component } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PagedResponse } from 'src/app/shared/models/paged-response.model';
import { Superhero } from '../../models/superhero.model';
import { SuperheroService } from '../../services/superhero.service';

@Component({
  selector: 'app-superhero-list-page',
  templateUrl: './superhero-list-page.component.html',
})
export class SuperheroListPageComponent implements OnInit {
  superheroes: Superhero[] = [];
  filter = new FormControl('');
  currentPage: number = 1;
  itemsPerPage: number = 30;
  total: number = 0;

  constructor(
    private router: Router,
    private superheroService: SuperheroService
  ) {}

  ngOnInit(): void {
    this.filter.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe(() => {
        this.currentPage = 1;
        this.loadSuperheroes();
      });

    this.loadSuperheroes();
  }

  loadSuperheroes(event?: PageEvent): void {
    if (event) {
      this.currentPage = event.pageIndex + 1;
      this.itemsPerPage = event.pageSize;
    }

    this.superheroService
      .getSuperheroes(this.filter.value!, this.currentPage, this.itemsPerPage)
      .subscribe({
        next: (response: PagedResponse<Superhero>) => {
          this.superheroes = response.data;
          this.total = response.total;
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error fetching heroes', error);
        },
      });
  }

  trackBySuperheroId(index: number, superhero: Superhero): number {
    return superhero.id!;
  }

  onAddClick() {
    this.router.navigate(['/superheroes/create']);
  }
}
