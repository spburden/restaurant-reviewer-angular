import {Pipe, PipeTransform} from '@angular/core';
import {Restaurant} from './restaurant.model';

@Pipe({
  name: "removeDouble",
  pure: false
})

export class RemoveDoublePipe implements PipeTransform {
    transform(input: Restaurant[]) {
      var specialtyArray = [];
      for (var i = 0; i < input.length; i++) {
        var found = false;
        if (i === 0) {
          specialtyArray.push(input[i]);
        }
        for (var j = 0; j < specialtyArray.length; j++) {
          if (specialtyArray[j].specialty.indexOf(input[i].specialty) === -1) {
            found = true;
          }
        }
        if (found) {
          specialtyArray.push(input[i]);
        }
      }
      return specialtyArray;
    }
}
