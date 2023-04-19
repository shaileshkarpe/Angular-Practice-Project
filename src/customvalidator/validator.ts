import { AbstractControl } from "@angular/forms";
export class ageRangeValidators {



    ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {



       if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {

           return { 'ageRange': true };

       }

       return null;

   }

}


