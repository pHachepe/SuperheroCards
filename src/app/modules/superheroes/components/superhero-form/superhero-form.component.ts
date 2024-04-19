import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Superhero } from '../../models/superhero.model';

@Component({
  selector: 'app-superhero-form',
  templateUrl: './superhero-form.component.html',
})
export class SuperheroFormComponent {
  @Input() superhero?: Superhero;
  @Output() formSubmit = new EventEmitter<Superhero>();

  form: FormGroup;
  genders = ['Male', 'Female', 'Other'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      race: ['', Validators.required],
      height: [
        '',
        [Validators.required, Validators.min(1), Validators.max(300)],
      ],
      weight: [
        '',
        [Validators.required, Validators.min(1), Validators.max(500)],
      ],
      imageUrl: [
        '',
        Validators.pattern(
          /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
        ),
      ],
      intelligence: [
        0,
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      strength: [
        0,
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      speed: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      durability: [
        0,
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      power: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      combat: [
        0,
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
    });
  }

  ngOnInit(): void {
    if (this.superhero) {
      this.form.patchValue({
        name: this.superhero.name,
        gender: this.superhero.appearance.gender,
        race: this.superhero.appearance.race,
        height: this.superhero.appearance.height[0],
        weight: this.superhero.appearance.weight[0],
        imageUrl: this.superhero.images.lg,
        intelligence: this.superhero.powerstats.intelligence,
        strength: this.superhero.powerstats.strength,
        speed: this.superhero.powerstats.speed,
        durability: this.superhero.powerstats.durability,
        power: this.superhero.powerstats.power,
        combat: this.superhero.powerstats.combat,
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value as Superhero);
    }
  }
}
