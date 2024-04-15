import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PagedResponse } from 'src/app/shared/models/paged-response.model';
import { SuperHero } from '../../models/superhero.model';
import { SuperheroService } from '../../services/superhero.service';

@Component({
  selector: 'app-list-superheroes',
  templateUrl: './list-superheroes.component.html',
})
export class ListSuperheroesComponent implements OnInit {
  superHeroes: SuperHero[] = [];
  filter = new FormControl('');
  currentPage: number = 1;
  itemsPerPage: number = 10;
  total: number = 0;

  constructor(private superHeroService: SuperheroService) {}

  ngOnInit(): void {
    this.filter.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe(() => {
        this.currentPage = 1;
        this.loadHeroes();
      });

    this.loadHeroes();
  }

  loadHeroes(event?: PageEvent): void {
    if (event) {
      this.currentPage = event.pageIndex + 1;
      this.itemsPerPage = event.pageSize;
    }

    this.superHeroService
      .getSuperHeroes(this.filter.value!, this.currentPage, this.itemsPerPage)
      .subscribe({
        next: (response: PagedResponse<SuperHero>) => {
          this.superHeroes = response.data;
          this.total = response.total;
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error fetching heroes', error);
        },
      });
  }

  onAddClick() {
    throw new Error('Method not implemented.');
  }
}
