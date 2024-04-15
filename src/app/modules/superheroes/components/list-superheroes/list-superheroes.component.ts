import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SuperHero } from '../../models/superhero.model';
import { SuperheroService } from '../../services/superhero.service';

@Component({
  selector: 'app-list-superheroes',
  templateUrl: './list-superheroes.component.html',
})
export class ListSuperheroesComponent implements OnInit {
  superHeroes: SuperHero[] = [];
  filter: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  total: number = 0;

  constructor(private superHeroService: SuperheroService) {}

  ngOnInit(): void {
    this.loadHeroes();
  }

  loadHeroes(page: number = this.currentPage): void {
    this.currentPage = page;
    this.superHeroService
      .getSuperHeroes(this.filter, page, this.itemsPerPage)
      .subscribe({
        next: (response) => {
          this.superHeroes = response.data;
          this.total = response.total;
        },
        error: (error) => {
          console.error('Error fetching heroes', error);
        },
      });
  }
}
