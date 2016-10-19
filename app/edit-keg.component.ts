// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Keg } from './keg.model';
//
// @Component({
//   selector: 'edit-keg',
//   template: `
//     <div *ngIf="childSelectedKeg">
//       <h1>Edit {{childSelectedKeg.name}}</h1>
//       <div>
//         <label>Replace keg: {{childSelectedKeg.pints}}</label>
//         <div *ngIf='childSelectedKeg.pints <= 10'>
//             <button (click)="resetClicked(childSelectedKeg)">Replace</button>
//         </div>
//
//         <button (click)="doneClicked()">Return</button>
//       </div>
//     </div>
//   `
// })
//
// export class EditKegComponent {
//   @Input() childSelectedKeg: Keg;
//   @Output() doneClickedSender = new EventEmitter();
//   resetClicked(replaceKeg: Keg) {
//     replaceKeg.pints = 124;
//     this.doneClickedSender.emit();
//   }
//   doneClicked() {
//     this.doneClickedSender.emit();
//   }
// }
