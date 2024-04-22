import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatIconModule, MatSnackBarModule, MatToolbarModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class CoreModule {}
