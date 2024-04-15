import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, catchError, finalize, tap, throwError } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private loadingService: LoadingService,
    private snackBar: MatSnackBar
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    setTimeout(() => this.loadingService.show(), 0);

    return next.handle(request).pipe(
      tap((event: HttpEvent<unknown>) => {
        if (event instanceof HttpResponse) {
          if (event.body && event.status === 200) {
            this.snackBar.open('Operation Successful', 'Close', {
              duration: 1000,
            });
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.snackBar.open(`Error: ${error.status} ${error.message}`, 'Close', {
          duration: 2000,
        });
        return throwError(() => error);
      }),
      finalize(() => setTimeout(() => this.loadingService.hide(), 0))
    );
  }
}
