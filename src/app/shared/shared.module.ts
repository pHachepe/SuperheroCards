import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenderIconPipe } from './pipes/gender-icon/gender-icon.pipe';

@NgModule({
  declarations: [GenderIconPipe],
  imports: [CommonModule],
  exports: [GenderIconPipe],
})
export class SharedModule {}
