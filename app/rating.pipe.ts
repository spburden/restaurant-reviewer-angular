import {
  Pipe,
  PipeTransform
} from '@angular/core';
import {
  Restaurant
} from './restaurant.model';
import {
  Review
} from './review.model';

@Pipe({
  name: "rating",
  pure: false
})

export class RatingPipe implements PipeTransform {

  transform(restaurantList: Restaurant[], reviewList: Review[], rating) {
    var ratingType = rating;
    if (ratingType === "low") {
      restaurantList.sort(function(a, b) {
        var dataRest: Restaurant[] = [a, b];
        var totalAvg: number[] = [];
        if (reviewList) {
          for (var i = 0; i < dataRest.length; i++) {
            console.log(dataRest);
            var ratingTotal: number = 0;
            var counter: number = 0;
            var total = null;
            for (var j = 0; j < reviewList.length; j++) {
              if (dataRest[i].id === reviewList[j].restaurantId) {
                ratingTotal += reviewList[j].rating;
                counter++;
              }
            }
            if (ratingTotal != 0 && counter != 0) {
              total = (ratingTotal / counter);
            } else {
              total = -1;
            }
            totalAvg.push(total);
          }
        }
        return totalAvg[0] - totalAvg[1]
      });
      // return restaurantList;
    } else if (ratingType === "high") {
      restaurantList.sort(function(a, b) {
        var dataRest: Restaurant[] = [a, b];
        var totalAvg: number[] = [];
        if (reviewList) {
          for (var i = 0; i < dataRest.length; i++) {
            var ratingTotal: number = 0;
            var counter: number = 0;
            var total = null;
            for (var j = 0; j < reviewList.length; j++) {
              if (dataRest[i].id === reviewList[j].restaurantId) {
                ratingTotal += reviewList[j].rating;
                counter++;
              }
            }
            if (ratingTotal != 0 && counter != 0) {
              total = (ratingTotal / counter);
            } else {
              total = -1;
            }
            totalAvg.push(total);
          }
        }
        return totalAvg[1] - totalAvg[0]
      });
      // return restaurantList;

    } else {
      return restaurantList;
    }
  }
}
