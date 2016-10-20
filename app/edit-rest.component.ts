import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'edit-rest',
  template: `
    <div *ngIf="childSelectedRestaurant">
      <h1>Edit {{childSelectedRestaurant.name}}</h1>
      <div>
        <label>Edit Name</label>
        <input typ="text" [(ngModel)]="childSelectedRestaurant.name" />
        <label>Edit Cuisine</label>
        <input typ="text" [(ngModel)]="childSelectedRestaurant.specialty" />
        <label>Edit Address</label>
        <input typ="text" [(ngModel)]="childSelectedRestaurant.address" />
        <label>Edit Price</label>
        <input typ="text" [(ngModel)]="childSelectedRestaurant.price" />
        <button (click)="doneClicked()">Return</button>
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
