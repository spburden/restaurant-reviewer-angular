import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { RestListComponent } from './rest-list.component';
import { ReviewListComponent } from './review-list.component';
import { EditRestaurantComponent } from './edit-rest.component';
import { NewRestComponent } from './new-rest.component';
import { NewReviewComponent } from './new-review.component';
import { PricePipe } from './price.pipe'; // import our pipe here
import { ReviewPipe } from './review.pipe'; // import our pipe here
import { RatingPipe } from './rating.pipe'; // import our pipe here
import { RemoveDoublePipe } from './removeDouble.pipe'; // import our pipe here
import { SpecialtyPipe } from './specialty.pipe'; // import our pipe here

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    RestListComponent,
    EditRestaurantComponent,
    NewRestComponent,
    NewReviewComponent,
    ReviewListComponent,
    PricePipe,
    ReviewPipe,
    RatingPipe,
    RemoveDoublePipe,
    SpecialtyPipe,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
