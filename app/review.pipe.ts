import {Pipe, PipeTransform} from '@angular/core';
import {Restaurant} from './restaurant.model';
import {Review} from './review.model';

@Pipe({
  name: "review",
  pure: false
})

export class ReviewPipe implements PipeTransform {
    transform(input: Review[], restId: number, rating) {

      var holder: Review[] = [];

      for (var i = 0; i < input.length; i++) {
        if (restId === input[i].restaurantId) {
          holder.push(input[i])
        }
      }

      var ratingType = rating;
      if (ratingType === "low") {
       holder.sort(function(a, b){return a.rating - b.rating});
       return holder;
     } else if (ratingType === "high") {
       holder.sort(function(a, b){return b.rating - a.rating});
       return holder;
     } else {
       return holder;
     }
  }


}
