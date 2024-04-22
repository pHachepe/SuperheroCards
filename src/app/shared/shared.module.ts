import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { FooterComponent } from './components/footer/footer.component';
import { GenderIconPipe } from './pipes/gender-icon/gender-icon.pipe';

@NgModule({
  declarations: [GenderIconPipe, FooterComponent, ConfirmDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [GenderIconPipe, FooterComponent, ConfirmDialogComponent],
})
export class SharedModule {}
