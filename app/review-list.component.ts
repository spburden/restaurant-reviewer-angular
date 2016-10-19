import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component({
  selector: 'review-list',
  template: `
    <div *ngIf="SelectedRest">
      <h2>{{SelectedRest.name}} reviews</h2>
      <div *ngFor="let currentReview of reviewList">
        <div *ngIf="currentReview.restaurantId == SelectedRest.id">
          <h3>{{ currentReview.customerName }}</h3>
          <p>{{ currentReview.info }}</p>
          <p>{{ currentReview.rating }} out of 10</p>
          <hr>
        </div>
      </div>
    </div>
    <button (click)="backSender()">back</button>
  `
})

export class ReviewListComponent {
  @Input() reviewList: Review[];
  @Input() SelectedRest: Restaurant;
  @Output() back = new EventEmitter();
  backSender() {
    this.back.emit();
  }
}
