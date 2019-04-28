import { AbstractControl, ValidatorFn } from '@angular/forms';

export function NoDuplicate(compareWith: Array<any>): ValidatorFn  {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (compareWith.indexOf(control.value) != -1) {
      return {duplicate: true};
    }
    return null;
  };
}
