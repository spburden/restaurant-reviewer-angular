import { Component } from '@angular/core';
import { Restaurant } from './Restaurant.model';
import { Review } from './Review.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Maz Kanata Restaurant list</h1>
    <div [hidden] = "!showList">
      <rest-list
        [childRestaurantList]="masterRestaurantList"
        [reviewList]="masterReviewList"
        (clickSender)="showDetails($event)"
        (clickSender2)="showReview($event)"
       ></rest-list>
    </div>
    <div [hidden] = "!showEdit">
      <edit-rest
      [childSelectedRestaurant]="selectedRestaurant"
      (doneClickedSender)="finished()"
      >
      </edit-rest>
    </div>
    <div [hidden] = "!showReviewData">
      <review-list
        [SelectedRest]="selectedRestaurant"
        [reviewList]="masterReviewList"
        (back)="finished()"
      ></review-list>
      <new-review
        [SelectedRest]="selectedRestaurant"
        (newReviewSender)="addReview($event)"
      ></new-review>

    </div>
    <div [hidden]= "!showNew">
      <new-rest
        [newRestId] = "masterRestaurantList.length"
        (newRestSender)="addRest($event)"
      ></new-rest>
    </div>
    <button [hidden] = "!showList" (click)="add()">Add Restaurant</button>
  </div>
  `
})

export class AppComponent {
  public masterRestaurantList: Restaurant[] = [
      new Restaurant("Bob's grill", "Steak house", "249 one way area, Portland, or", "$$", 0),
      new Restaurant("Adam's grill", "Steak house", "242 one way area, Portland, or", "$$$$$", 3),
      new Restaurant("Zaytoon", "Mediteranien", "Portland, or", "$$$$", 1),
      new Restaurant("Mumbai Spice", "Indian", "249 one way area, Portland, or", "$$$", 2),
  ];
  public masterReviewList: Review[] = [
    new Review("Adam", "The food is ok", 7, 0),
  ];
  showList = true;
  showEdit = false;
  showNew = false;
  showReviewData = false;
  selectedRestaurant: Restaurant = null;
  showDetails(clickedRestaurant: Restaurant) {
    this.showList = false;
    this.showEdit = true;
    this.showNew = false;
    this.showReviewData = false;
    this.selectedRestaurant = clickedRestaurant;
  }
  finished() {
    this.showList = true;
    this.showEdit = false;
    this.showNew = false;
    this.showReviewData = false;
    this.selectedRestaurant = null;
  }
  addRest(newRestaurantFromChild: Restaurant) {
    this.showList = true;
    this.showEdit = false;
    this.showNew = false;
    this.showReviewData = false;
    this.masterRestaurantList.push(newRestaurantFromChild);
  }

  addReview(newReview: Review) {
    this.masterReviewList.push(newReview);
  }

  showReview(clickedRestaurant: Restaurant) {
    this.showList = false;
    this.showEdit = false;
    this.showNew = false;
    this.showReviewData = true;
    this.selectedRestaurant = clickedRestaurant;
  }

  add() {
    this.showList = false;
    this.showEdit = false;
    this.showNew = true;
  }
}
