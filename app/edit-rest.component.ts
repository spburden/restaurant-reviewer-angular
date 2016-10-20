import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'edit-rest',
  template: `
    <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">Edit</h4>
          </div>
          <div class="modal-body">
            <div *ngIf="childSelectedRestaurant">
              <h1>Edit {{childSelectedRestaurant.name}}</h1>
              <div>
                <div class="form-group">
                  <label>Edit Name</label>
                  <input class="form-control" type="text" [(ngModel)]="childSelectedRestaurant.name" />
                </div>
                <div class="form-group">
                  <label>Edit Cuisine</label>
                  <input class="form-control" type="text" [(ngModel)]="childSelectedRestaurant.specialty" />
                </div>
                <div class="form-group">
                  <label>Edit Address</label>
                  <input class="form-control" type="text" [(ngModel)]="childSelectedRestaurant.address" />
                </div>
                <div class="form-group">
                  <label>Edit Price</label>
                  <input class="form-control" type="text" [(ngModel)]="childSelectedRestaurant.price" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `
})

export class EditRestaurantComponent {
  @Input() childSelectedRestaurant: Restaurant;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
