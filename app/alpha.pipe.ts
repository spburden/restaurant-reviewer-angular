import {Pipe, PipeTransform} from '@angular/core';
import {Restaurant} from './restaurant.model';

@Pipe({
  name: "alpha",
  pure: false
})

export class AlphaPipe implements PipeTransform {
  transform(input: Restaurant[], alpha) {
    var alphaType = alpha;
    if (alphaType !== "none") {
      input.sort(function(a, b) {
        if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
      });

      if (alphaType === "za"){
        input.reverse();
      }
      return input;
    }
    return input;
  }
}
