import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { GenderIconPipe } from './pipes/gender-icon/gender-icon.pipe';

@NgModule({
  declarations: [GenderIconPipe, FooterComponent],
  imports: [CommonModule],
  exports: [GenderIconPipe, FooterComponent],
})
export class SharedModule {}
