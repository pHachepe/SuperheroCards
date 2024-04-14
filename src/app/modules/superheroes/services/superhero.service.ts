import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PagedResponse } from 'src/app/shared/models/paged-response.model';
import { environment } from 'src/environments/environment';
import { SuperHero } from '../models/superhero.model';

@Injectable({
  providedIn: 'root',
})
export class SuperheroService {
  private apiUrl = environment.apiUrl + '/superheroes';

  constructor(private http: HttpClient) {}

  getSuperHeroes(
    page: number,
    limit: number
  ): Observable<PagedResponse<SuperHero>> {
    let params = new HttpParams()
      .set('_page', String(page))
      .set('_limit', String(limit));

    return this.http
      .get<SuperHero[]>(this.apiUrl, { observe: 'response', params })
      .pipe(
        map((response: HttpResponse<SuperHero[]>) => {
          return {
            data: response.body as SuperHero[],
            total: parseInt(response.headers.get('X-Total-Count') || '0'),
          };
        })
      );
  }

  geSuperHero(id: number): Observable<SuperHero> {
    return this.http.get<SuperHero>(`${this.apiUrl}/${id}`);
  }

  createSuperHero(superhero: SuperHero): Observable<SuperHero> {
    return this.http.post<SuperHero>(this.apiUrl, superhero);
  }

  updateSuperHero(superhero: SuperHero): Observable<SuperHero> {
    return this.http.put<SuperHero>(
      `${this.apiUrl}/${superhero.id}`,
      superhero
    );
  }

  deleteSuperHero(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
