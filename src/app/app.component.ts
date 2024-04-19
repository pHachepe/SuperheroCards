import { Component } from '@angular/core';
import { LoadingService } from './core/services/loading.service';
import { slideFadeAnimation } from './animations/route.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideFadeAnimation],
})
export class AppComponent {
  constructor(public loadingService: LoadingService) {}

  prepareRoute(outlet: any) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
