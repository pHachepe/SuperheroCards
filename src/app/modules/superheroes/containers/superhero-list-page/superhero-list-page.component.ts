import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private superheroService: SuperheroService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      const page = params['page'] ? Number(params['page']) : 1;
      const pageSize = params['pageSize']
        ? Number(params['pageSize'])
        : this.itemsPerPage;
      const filterValue = params['filter'] || '';

      this.filter.setValue(filterValue, { emitEvent: false });
      this.currentPage = page;
      this.itemsPerPage = pageSize;

      this.loadSuperheroes();
    });

    this.filter.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe(() => {
        this.currentPage = 1;
        this.updateQueryParams();
      });
  }

  loadSuperheroes(): void {
    this.superheroService
      .getSuperheroes(this.filter!.value!, this.currentPage, this.itemsPerPage)
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

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.updateQueryParams();
  }

  updateQueryParams(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        filter: this.filter.value || null,
        page: this.currentPage,
        pageSize: this.itemsPerPage,
      },
      queryParamsHandling: 'merge',
    });
  }

  trackBySuperheroId(index: number, superhero: Superhero): number {
    return superhero.id!;
  }

  onAddClick() {
    this.router.navigate(['/superheroes/create']);
  }
}
