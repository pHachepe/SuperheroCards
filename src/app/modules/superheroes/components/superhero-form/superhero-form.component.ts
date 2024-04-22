import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { Superhero } from '../../models/superhero.model';

@Component({
  selector: 'app-superhero-form',
  templateUrl: './superhero-form.component.html',
})
export class SuperheroFormComponent implements OnInit {
  @Input() superhero$!: Observable<Superhero> | null;
  @Output() save = new EventEmitter<Superhero>();
  @Output() delete = new EventEmitter<number>();
  superhero: Partial<Superhero> = {}; // Esto se usa solo para no perder los valores que no tiene el formulario

  form: FormGroup;
  genders = ['Male', 'Female', 'Other'];
  powerStats = [
    { name: 'intelligence', icon: 'psychology' },
    { name: 'durability', icon: 'security' },
    { name: 'strength', icon: 'fitness_center' },
    { name: 'power', icon: 'bolt' },
    { name: 'speed', icon: 'rocket_launch' },
    { name: 'combat', icon: 'sports_martial_arts' },
  ];

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    const validImageURL =
      '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})([/\\w .-]*/?.*.(jpg|webp|png|bmp|svg))$';

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
        lg: ['', Validators.pattern(validImageURL)],
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
    if (this.superhero$) {
      this.superhero$.subscribe((superhero: Superhero) => {
        this.superhero = superhero as Superhero;
        this.initializeForm(superhero);
      });
    }
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

  onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.value;

      const newSuperhero: Superhero = {
        ...this.superhero,
        ...formValue,
        appearance: {
          ...this.superhero.appearance,
          ...formValue.appearance,
          height: ['', formValue.appearance.height], // Store as array
          weight: ['', formValue.appearance.weight], // Store as array
        },
        images: {
          ...this.superhero.images,
          ...formValue.images,
        },
      };

      this.save.emit(newSuperhero);
    }
  }

  onDelete() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Deletion',
        message: 'Are you sure you want to delete this superhero?',
      },
    });

    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      if (confirm && this.superhero.id) {
        this.delete.emit(this.superhero.id);
      }
    });
  }

  trackByPowerStatName(index: number, item: { name: string }) {
    return item.name;
  }

  trackByGender(index: number, item: string) {
    return item;
  }
}
