import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'rest-list',
  template: `
  <select (change)="onChangePrice($event.target.value)">
    <option value="low">Low to High</option>
    <option value="high">High to low</option>
  </select>
    <div *ngFor="let currentRestaurant of childRestaurantList| price:selectedPrice">
      <h3>{{ currentRestaurant.name }}</h3>
      <ul>
        <li>{{ currentRestaurant.specialty }}</li>
        <li>{{ currentRestaurant.address }}</li>
        <li>{{ currentRestaurant.price }}</li>
      </ul>
      <button (click)="editButtonHasBeenClicked(currentRestaurant)">Edit</button>
      <button (click)="reviewButtonHasBeenClicked(currentRestaurant)">review</button>
    </div>
  `
})

export class RestListComponent {
  @Input() childRestaurantList: Restaurant[];
  @Output() clickSender = new EventEmitter();
  @Output() clickSender2 = new EventEmitter();
  public selectedPrice = "low";
  editButtonHasBeenClicked(RestaurantToEdit: Restaurant) {
    this.clickSender.emit(RestaurantToEdit);
  }

  reviewButtonHasBeenClicked(RestaurantToReview: Restaurant) {
    this.clickSender2.emit(RestaurantToReview);
  }

  onChangePrice(optionFromMenu) {
    this.selectedPrice = optionFromMenu;
  }
}
