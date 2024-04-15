import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderIcon',
})
export class GenderIconPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'Female':
        return 'female';
      case 'Male':
        return 'male';
      default:
        return 'help_outline';
    }
  }
}
