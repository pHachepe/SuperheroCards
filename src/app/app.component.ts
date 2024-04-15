import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'SuperHeroCards';
  isLoading = false;

  constructor(public loadingService: LoadingService) {}
}
