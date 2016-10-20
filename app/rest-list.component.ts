import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component({
  selector: 'rest-list',
  template: `
  <label>Filter By Price</label>
  <select (change)="onChangePrice($event.target.value)">
    <option value="none">none</option>
    <option value="low">Low to High</option>
    <option value="high">High to low</option>
  </select>
  <label>Filter By Rating</label>
  <select (change)="onChangeReview($event.target.value)">
    <option value="none">none</option>
    <option value="low">Low to High</option>
    <option value="high">High to low</option>
  </select>
  <label>Alphabetize</label>
  <select (change)="onChangeAlpha($event.target.value)">
    <option value="none">none</option>
    <option value="az">A - Z</option>
    <option value="za">Z - A</option>
  </select>

  <label>Filter By specialty</label>
  <select (change)="onChangeSpecialty($event.target.value)">
    <option value="none">none</option>
    <option *ngFor="let currentRestaurant of childRestaurantList | removeDouble" value="{{currentRestaurant.specialty}}">{{ currentRestaurant.specialty }}</option>
  </select>
    <div *ngFor="let currentRestaurant of childRestaurantList | price:selectedPrice | rating:reviewList:selectedRating | specialty:selectedSpecialty">
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
  public selectedPrice = "none";
  public selectedRating = "none";
  public selectedSpecialty = "none";
  public selectedAlpha = "none";
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

  onChangeReview(optionFromMenu) {
    this.selectedRating = optionFromMenu;
  }

  onChangeSpecialty(optionFromMenu) {
    this.selectedSpecialty = optionFromMenu;
  }

  onChangeAlpha(optionFromMenu) {
    this.selectedAlpha = optionFromMenu;
  }

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
