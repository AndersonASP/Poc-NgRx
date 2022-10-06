import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {addNewCar, removeCar, setCarList} from "./car/car/store/car.actions";
import {selectCars} from "./car/car/store/car.selectors";
import {Car} from "./car/car/store/car.reducer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'poc-ngrx';

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(
      setCarList({
        cars: [
          {id: '1', make: 'FIAT', model: 'uno', year: '2010'}
        ],
      })
    );
  }

}


