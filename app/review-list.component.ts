import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component({
  selector: 'review-list',
  template: `
  <div *ngIf="SelectedRest">
    <h2>{{SelectedRest.name}} reviews</h2>
    <h3>Average Review: {{avgReview(SelectedRest.id)}}</h3>
    <div class="star-ratings-css" *ngIf="avgReview(SelectedRest.id) != 'no rating yet'">
      <div class="star-ratings-css-top" [style.width.%]="(125/100) * (avgReview(SelectedRest.id) * 10)"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
      <div class="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
    </div>
    <select (change)="onChangeRating($event.target.value)">
      <option value="low">Low to High</option>
      <option value="high">High to low</option>
    </select>
    <div *ngFor="let currentReview of reviewList | review:SelectedRest.id:selectedRating">
        <h3>{{ currentReview.customerName }}</h3>
        <p>{{ currentReview.info }}</p>
        <p> {{ currentReview.rating }} out of 10</p>
        <div class="star-ratings-css">
          <div class="star-ratings-css-top" [style.width.%]="(125/100) * (currentReview.rating * 10)"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
          <div class="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        </div>
        <hr>
    </div>
  </div>
  `
})

export class ReviewListComponent {
  @Input() reviewList: Review[];
  @Input() SelectedRest: Restaurant;
  @Output() back = new EventEmitter();
  backSender() {
    this.back.emit();
  }

  public selectedRating= "low";
  onChangeRating(optionFromMenu) {
      this.selectedRating = optionFromMenu;
    }

  public total = null;

  avgReview(restId: number) {
    var avg: number = 0;
    var counter: number = 0;
    if (this.reviewList) {
      for (var i = 0; i < this.reviewList.length; i++) {
        if (restId ===  this.reviewList[i].restaurantId) {
          var next = avg;
          avg = next + this.reviewList[i].rating;
          counter++;
        }
      }
      if (avg != 0  && counter != 0) {
        this.total = (avg / counter).toFixed(2);
      } else {
        this.total = "no rating yet";
      }

      return this.total;
    }

  }
}
