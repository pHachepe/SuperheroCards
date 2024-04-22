import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Superhero } from '../../models/superhero.model';

@Component({
  selector: 'app-superhero-card',
  templateUrl: './superhero-card.component.html',
})
export class SuperheroCardComponent {
  @Input() superhero!: Superhero;
  defaultImage: string = 'assets/default.svg';

  constructor(private router: Router) {}

  handleImageError(event: Event): void {
    (event.target as HTMLImageElement).src = this.defaultImage;
    (event.target as HTMLImageElement).style.width = 'auto';
    (event.target as HTMLImageElement).style.padding = '0.5rem';
  }

  navigateToEdit() {
    this.router.navigate(['/superheroes/edit', this.superhero.id], {
      state: { superhero: this.superhero },
    });
  }

  get powerStats() {
    return [
      {
        name: 'Intelligence',
        value: this.superhero.powerstats.intelligence,
        icon: 'psychology',
      },
      {
        name: 'Durability',
        value: this.superhero.powerstats.durability,
        icon: 'security',
      },
      {
        name: 'Strength',
        value: this.superhero.powerstats.strength,
        icon: 'fitness_center',
      },
      { name: 'Power', value: this.superhero.powerstats.power, icon: 'bolt' },
      {
        name: 'Speed',
        value: this.superhero.powerstats.speed,
        icon: 'forward',
      },
      {
        name: 'Combat',
        value: this.superhero.powerstats.combat,
        icon: 'sports_martial_arts',
      },
    ];
  }

  trackByPowerStatName(index: number, item: { name: string }) {
    return item.name;
  }
}
