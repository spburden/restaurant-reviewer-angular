import {Pipe, PipeTransform} from '@angular/core';
import {Restaurant} from './restaurant.model';

@Pipe({
  name: "specialty",
  pure: false
})

export class SpecialtyPipe implements PipeTransform {
    transform(input: Restaurant[], specialty) {
      var specialtyType = specialty;
      var specialtyArray = [];
      if (specialtyType !== "none") {
        for (var i = 0; i < input.length; i++) {
          if (specialtyType === input[i].specialty) {
            specialtyArray.push(input[i]);
          }
        }
        return specialtyArray;
      }
      return input;
    }
}
