import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './Restaurant.model';

@Component({
  selector: 'new-rest',
  template: `
    <div class="modal fade" id="newRest" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">New Restaurant</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Enter Restaurant name:</label>
              <input class="form-control" #newName>
            </div>
            <div class="form-group">
              <label>Enter Restaurant Specialty:</label>
              <input class="form-control" #newSpecialty>
            </div>
            <div class="form-group">
              <label>Enter Restaurant Address:</label>
              <input class="form-control" #newAddress>
            </div>
            <div class="form-group">
              <label>Enter Restaurant Price</label>
              <input class="form-control" #newPrice>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" (click)="
              addClicked(newName.value, newSpecialty.value, newAddress.value, newPrice.value, newRestId);
              newName.value='';
              newSpecialty.value='';
              newAddress.value='';
              newPrice.value='';
            ">Add</button>
          </div>
        </div>
      </div>
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
