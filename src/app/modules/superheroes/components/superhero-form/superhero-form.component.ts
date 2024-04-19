import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Superhero } from '../../models/superhero.model';

@Component({
  selector: 'app-superhero-form',
  templateUrl: './superhero-form.component.html',
})
export class SuperheroFormComponent implements OnInit {
  @Input() superhero$!: Observable<Superhero>;
  @Output() formSubmit = new EventEmitter<Superhero>();

  form: FormGroup;
  genders = ['Male', 'Female', 'Other'];
  sliders = [
    { name: 'intelligence', icon: 'psychology' },
    { name: 'durability', icon: 'security' },
    { name: 'strength', icon: 'fitness_center' },
    { name: 'power', icon: 'bolt' },
    { name: 'speed', icon: 'rocket_launch' },
    { name: 'combat', icon: 'sports_martial_arts' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      appearance: this.fb.group({
        height: [
          '',
          [Validators.required, Validators.min(1), Validators.max(300)],
        ],
        weight: [
          '',
          [Validators.required, Validators.min(1), Validators.max(500)],
        ],
        gender: ['', Validators.required],
        race: ['', Validators.required],
      }),
      images: this.fb.group({
        lg: [
          '',
          /*Validators.pattern(
          /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
        ),*/
        ],
      }),
      powerstats: this.fb.group({
        intelligence: [
          0,
          [Validators.required, Validators.min(0), Validators.max(100)],
        ],
        strength: [
          0,
          [Validators.required, Validators.min(0), Validators.max(100)],
        ],
        speed: [
          0,
          [Validators.required, Validators.min(0), Validators.max(100)],
        ],
        durability: [
          0,
          [Validators.required, Validators.min(0), Validators.max(100)],
        ],
        power: [
          0,
          [Validators.required, Validators.min(0), Validators.max(100)],
        ],
        combat: [
          0,
          [Validators.required, Validators.min(0), Validators.max(100)],
        ],
      }),
    });
  }

  ngOnInit(): void {
    this.superhero$.subscribe((superhero) => {
      if (superhero) {
        this.initializeForm(superhero);
      }
    });
  }

  initializeForm(superhero: Superhero): void {
    this.form.patchValue({
      ...superhero,
      appearance: {
        ...superhero.appearance,
        height: parseInt(superhero.appearance.height[1], 10),
        weight: parseInt(superhero.appearance.weight[1], 10),
      },
      image: superhero.images.lg,
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Data:', this.form.value);
    }
  }
}
