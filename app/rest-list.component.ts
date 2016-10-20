import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component({
  selector: 'rest-list',
  template: `
  <div class="row">
    <div class="col-md-3">
      <div class="form-group">
        <label>Filter By Price</label>
        <select class="form-control" (change)="onChangePrice($event.target.value)">
          <option value="none">none</option>
          <option value="low">Low to High</option>
          <option value="high">High to low</option>
        </select>
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label>Filter By Rating</label>
        <select class="form-control" (change)="onChangeReview($event.target.value)">
          <option value="none">none</option>
          <option value="low">Low to High</option>
          <option value="high">High to low</option>
        </select>
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label>Alphabetize</label>
        <select class="form-control" (change)="onChangeAlpha($event.target.value)">
          <option value="none">none</option>
          <option value="az">A - Z</option>
          <option value="za">Z - A</option>
        </select>
      </div>
    </div>
  <div class="col-md-3">
    <div class="form-group">
      <label>Filter By Cuisine</label>
      <select class="form-control" (change)="onChangeSpecialty($event.target.value)">
        <option value="none">none</option>
        <option *ngFor="let currentRestaurant of childRestaurantList | removeDouble" value="{{currentRestaurant.specialty}}">{{ currentRestaurant.specialty }}</option>
      </select>
    </div>
  </div>

   <div class="row">
      <div *ngFor="let currentRestaurant of childRestaurantList | price:selectedPrice | rating:reviewList:selectedRating | specialty:selectedSpecialty | alpha:selectedAlpha" class="col-md-4">
        <div class="well">
          <h3>{{ currentRestaurant.name }} <i class="fa fa-anchor" aria-hidden="true"></i></h3>
          <ul>
            <li>{{ currentRestaurant.specialty }}</li>
            <li>{{ currentRestaurant.address }}</li>
            <li>{{ currentRestaurant.price }}</li>
            <li>Average Rating: {{avgReview(currentRestaurant.id)}}</li>
            <div class="star-ratings-css" *ngIf="avgReview(currentRestaurant.id) == 'no rating yet'">
              <div class="star-ratings-css-top" [style.width.%]="(125/100) * 0"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
              <div class="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            </div>

            <div class="star-ratings-css" *ngIf="avgReview(currentRestaurant.id) != 'no rating yet'">
              <div class="star-ratings-css-top" [style.width.%]="(125/100) * (avgReview(currentRestaurant.id) * 10)"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
              <div class="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            </div>
          </ul>
          <!-- Button trigger modal -->
          <button (click)="reviewButtonHasBeenClicked(currentRestaurant)" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
            Reviews
          </button>
          <button (click)="editButtonHasBeenClicked(currentRestaurant)" class="btn btn-info btn-lg" data-toggle="modal" data-target="#edit">Edit</button>
        </div>
      </div>
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
