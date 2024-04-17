import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Superhero } from '../../models/superhero.model';

@Component({
  selector: 'app-superhero-card',
  templateUrl: './superhero-card.component.html',
})
export class SuperheroCardComponent {
  @Input() superhero!: Superhero;

  constructor(private router: Router) {}

  navigateToEdit() {
    this.router.navigate(['/superheroes/edit', this.superhero.id], {
      state: { superhero: this.superhero },
    });
  }

  get powerStats() {
    return [
      {
        name: 'Inteligencia',
        value: this.superhero.powerstats.intelligence,
        icon: 'psychology',
      },
      {
        name: 'Fuerza',
        value: this.superhero.powerstats.strength,
        icon: 'fitness_center',
      },
      {
        name: 'Velocidad',
        value: this.superhero.powerstats.speed,
        icon: 'forward',
      },
      {
        name: 'Durabilidad',
        value: this.superhero.powerstats.durability,
        icon: 'security',
      },
      { name: 'Poder', value: this.superhero.powerstats.power, icon: 'bolt' },
      {
        name: 'Combate',
        value: this.superhero.powerstats.combat,
        icon: 'sports_martial_arts',
      },
    ];
  }
}
