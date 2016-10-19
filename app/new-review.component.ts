import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Review } from './Review.model';
import { Restaurant } from './Restaurant.model';

@Component({
  selector: 'new-review',
  template: `
    <div *ngIf="SelectedRest">
      <h1>New Review for {{SelectedRest.name}}</h1>
      <div>
        <label>Enter your Name:</label>
        <input #newCustomerName>
      </div>
      <div>
        <label>Enter Description:</label>
        <input #newDescription>
      </div>
      <div>
        <label>Rating out of 10:</label>
        <input #newRating>
      </div>
      <div>
        <button (click)="
          addClicked(newCustomerName.value, newDescription.value, newRating.value, SelectedRest.id);
          newCustomerName.value='';
          newDescription.value='';
          newRating.value='';
        ">Add</button>
      </div>
    </div>
  `
})

export class NewReviewComponent {
  @Input() SelectedRest: Restaurant;
  @Output() newReviewSender = new EventEmitter();
  addClicked(customerName: string, info: string, rating: number, restaurantId: number) {
    var newReviewToAdd: Review = new Review (customerName, info, rating, restaurantId);
      this.newReviewSender.emit(newReviewToAdd);
  }
}
