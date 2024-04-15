import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SuperHero } from '../../models/superhero.model';

@Component({
  selector: 'app-super-hero-card',
  templateUrl: './super-hero-card.component.html',
})
export class SuperHeroCardComponent {
  @Input() superHero!: SuperHero;

  constructor(private router: Router) {}

  navigateToEdit() {
    this.router.navigate(['/superheroes/edit', this.superHero.id], {
      state: { superhero: this.superHero },
    });
  }

  get powerStats() {
    return [
      {
        name: 'Inteligencia',
        value: this.superHero.powerstats.intelligence,
        icon: 'psychology',
      },
      {
        name: 'Fuerza',
        value: this.superHero.powerstats.strength,
        icon: 'fitness_center',
      },
      {
        name: 'Velocidad',
        value: this.superHero.powerstats.speed,
        icon: 'forward',
      },
      {
        name: 'Durabilidad',
        value: this.superHero.powerstats.durability,
        icon: 'security',
      },
      { name: 'Poder', value: this.superHero.powerstats.power, icon: 'bolt' },
      {
        name: 'Combate',
        value: this.superHero.powerstats.combat,
        icon: 'sports_martial_arts',
      },
    ];
  }
}
