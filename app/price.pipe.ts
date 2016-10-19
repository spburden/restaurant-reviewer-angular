import {Pipe, PipeTransform} from '@angular/core';
import {Restaurant} from './restaurant.model';

@Pipe({
  name: "price",
  pure: false
})

export class PricePipe implements PipeTransform {
    transform(input: Restaurant[], price) {
      var costType = price;
      if (costType === "low") {
       input.sort(function(a, b){return a.price.length - b.price.length});
       return input;
     } else {
       input.sort(function(a, b){return b.price.length - a.price.length});
       return input;
     }
  }
}
