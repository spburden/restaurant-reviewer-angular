import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './Restaurant.model';

@Component({
  selector: 'new-rest',
  template: `
    <h1>New Restaurant</h1>
    <div>
      <label>Enter Restaurant name:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter Restaurant Specialty:</label>
      <input #newSpecialty>
    </div>
    <div>
      <label>Enter Restaurant Address:</label>
      <input #newAddress>
    </div>
    <div>
      <label>Enter Restaurant Price</label>
      <input #newPrice>
    </div>
    <div>
      <label>Enter Restaurant Priority:</label>
      <button (click)="
        addClicked(newName.value, newSpecialty.value, newAddress.value, newPrice.value, newRestId);
        newName.value='';
        newSpecialty.value='';
        newAddress.value='';
        newPrice.value='';
      ">Add</button>
    </div>
  `
})

export class NewRestComponent {
  @Input() newRestId: number;
  @Output() newRestSender = new EventEmitter();

  addClicked(name: string, specialty: string, address: string, price: string, id: number) {
    function titleCase(string) {
      return string.split(' ').map(function(val){
        return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
      }).join(' ');
    }
    name = titleCase(name);
    specialty = titleCase(specialty);
    address = titleCase(address);
    var newRestaurantToAdd: Restaurant = new Restaurant(name, specialty, address, price, id);
    this.newRestSender.emit(newRestaurantToAdd);
  }
}
