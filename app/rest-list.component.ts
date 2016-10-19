import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component({
  selector: 'rest-list',
  template: `
  <select (change)="onChangePrice($event.target.value)">
    <option value="low">Low to High</option>
    <option value="high">High to low</option>
  </select>
  {{reviewList[0].customerName}}
    <div *ngFor="let currentRestaurant of childRestaurantList | price:selectedPrice">
      <h3>{{ currentRestaurant.name }}</h3>
      <ul>
        <li>{{ currentRestaurant.specialty }}</li>
        <li>{{ currentRestaurant.address }}</li>
        <li>{{ currentRestaurant.price }}</li>
        <li>Review avg: {{avgReview(currentRestaurant.id)}}</li>
      </ul>
      <button (click)="editButtonHasBeenClicked(currentRestaurant)">Edit</button>
      <button (click)="reviewButtonHasBeenClicked(currentRestaurant)">review</button>
    </div>
  `
})

export class RestListComponent {
  @Input() childRestaurantList: Restaurant[];
  @Input() reviewList: Review[];
  @Output() clickSender = new EventEmitter();
  @Output() clickSender2 = new EventEmitter();
  public selectedPrice = "low";
  public total = null;
  editButtonHasBeenClicked(RestaurantToEdit: Restaurant) {
    this.clickSender.emit(RestaurantToEdit);
  }

  reviewButtonHasBeenClicked(RestaurantToReview: Restaurant) {
    this.clickSender2.emit(RestaurantToReview);
  }

  onChangePrice(optionFromMenu) {
    this.selectedPrice = optionFromMenu;
  }

  avgReview(restId: number) {
    var avg: number = 0;
    var counter: number = 0;
    console.log(restId);
    if (this.reviewList) {
      console.log(this.reviewList)
      for (var i = 0; i < this.reviewList.length; i++) {
        if (restId ===  this.reviewList[i].restaurantId) {
          avg += this.reviewList[i].rating;
          counter++;
        }
      }

      if (avg != 0  && counter != 0) {
        this.total = avg / counter
      } else {
        this.total = "no rating yet"
      }
      return this.total;
    }

  }

}
