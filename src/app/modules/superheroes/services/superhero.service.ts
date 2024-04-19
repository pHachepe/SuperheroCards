import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PagedResponse } from 'src/app/shared/models/paged-response.model';
import { environment } from 'src/environments/environment';
import { Superhero } from '../models/superhero.model';

@Injectable({
  providedIn: 'root',
})
export class SuperheroService {
  private apiUrl = environment.apiUrl + '/superheroes';

  constructor(private http: HttpClient) {}

  getSuperheroes(
    filter: string = '',
    page: number = 1,
    limit: number = 10
  ): Observable<PagedResponse<Superhero>> {
    let params = new HttpParams()
      .set('name_like', filter)
      .set('_page', String(page))
      .set('_limit', String(limit));

    return this.http
      .get<Superhero[]>(this.apiUrl, { observe: 'response', params })
      .pipe(
        map((response: HttpResponse<Superhero[]>) => {
          return {
            data: response.body as Superhero[],
            total: parseInt(response.headers.get('X-Total-Count') || '0'),
          };
        })
      );
  }

  getSuperhero(id: number): Observable<Superhero> {
    return this.http.get<Superhero>(`${this.apiUrl}/${id}`);
  }

  createSuperhero(superhero: Superhero): Observable<Superhero> {
    return this.http.post<Superhero>(this.apiUrl, superhero);
  }

  updateSuperhero(superhero: Superhero): Observable<Superhero> {
    return this.http.put<Superhero>(
      `${this.apiUrl}/${superhero.id}`,
      superhero
    );
  }

  deleteSuperhero(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
