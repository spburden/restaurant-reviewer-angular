import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Review } from './Review.model';
import { Restaurant } from './Restaurant.model';

@Component({
  selector: 'new-review',
  template: `
    <div *ngIf="SelectedRest">
      <h1>New Review for {{SelectedRest.name}}</h1>
      <div class="form-group">
        <label>Enter your Name:</label>
        <input class="form-control" #newCustomerName>
      </div>
      <div class="form-group">
        <label>Enter Description:</label>
        <input class="form-control" #newDescription>
      </div>
      <div class="form-group">
        <label>Rating out of 10:</label>
        <input class="form-control" #newRating type="number" min="1" max="10" value="1">
      </div>
      <div class="form-group">
      <div id="hidden" style="display:none">
        <p>need to be 1 - 10 for rating, need to have something in name and/or desciption</p>
      </div>
        <button class="btn btn-info"(click)="
          addClicked(newCustomerName.value, newDescription.value, newRating.value, SelectedRest.id);
        ">Add</button>
      </div>
    </div>
  `
})

export class NewReviewComponent {
  @Input() SelectedRest: Restaurant;
  @Output() newReviewSender = new EventEmitter();
  addClicked(customerName: string, info: string, rating: string, restaurantId: number) {
    if (parseInt(rating) >= 1 && parseInt(rating) <= 10 && info != '' && customerName != '') {
      document.getElementById("hidden").style.display = "none";
      var newReviewToAdd: Review = new Review (customerName, info, parseFloat(rating), restaurantId);
        this.newReviewSender.emit(newReviewToAdd);
    } else {
      document.getElementById("hidden").style.display = "inline";
    }

  }
}
