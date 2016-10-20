import { Component } from '@angular/core';
import { Restaurant } from './Restaurant.model';
import { Review } from './Review.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Maz Kanata Restaurant list</h1>
      <rest-list
        [childRestaurantList]="masterRestaurantList"
        [reviewList]="masterReviewList"
        (clickSender)="showDetails($event)"
        (clickSender2)="showReview($event)"
       ></rest-list>
      <edit-rest
      [childSelectedRestaurant]="selectedRestaurant"
      (doneClickedSender)="finished()"
      >
      </edit-rest>
      <!-- Modal -->
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title" id="myModalLabel">Reviews</h4>
            </div>
            <div class="modal-body">
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
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <new-rest
        [newRestId] = "masterRestaurantList.length"
        (newRestSender)="addRest($event)"
      ></new-rest>
    <button class="btn btn-info btn-lg" data-toggle="modal" data-target="#newRest">Add Restaurant</button>
    <br />
    <br />
  </div>

  `
})

export class AppComponent {
  public masterRestaurantList: Restaurant[] = [
      new Restaurant("Bob's Grill", "Steak House", "249 One Way Area, Portland, OR", "$$", 0),
      new Restaurant("Adam's Grill", "Steak House", "242 One way area, Portland, OR", "$$$$$", 3),
      new Restaurant("Zaytoon", "Mediteranien", "Portland, OR", "$$$$", 1),
      new Restaurant("Mumbai Spice", "Indian", "246 One Way Area, Portland, OR", "$$$", 2),
  ];
  public masterReviewList: Review[] = [
    new Review("Adam", "The food is ok", 7.3, 0),
    new Review("Steve", "The food is blahhhh blahhh", 5.3, 1),
    new Review("Caleb", "The food is superbb bro!", 8.9, 2)
  ];

  selectedRestaurant: Restaurant = null;
  showDetails(clickedRestaurant: Restaurant) {
    this.selectedRestaurant = clickedRestaurant;
  }
  finished() {
    this.selectedRestaurant = null;
  }
  addRest(newRestaurantFromChild: Restaurant) {
    this.masterRestaurantList.push(newRestaurantFromChild);
  }

  addReview(newReview: Review) {
    this.masterReviewList.push(newReview);
  }

  showReview(clickedRestaurant: Restaurant) {
    this.selectedRestaurant = clickedRestaurant;
  }
}
