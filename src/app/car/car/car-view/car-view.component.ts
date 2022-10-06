import { Component, OnInit } from '@angular/core';
import {selectCar, selectCars} from "../store/car.selectors";
import {Store} from "@ngrx/store";
import {addNewCar, removeCar, setCarList} from "../store/car.actions";
import {Car} from "../store/car.reducer";
import {map} from "rxjs";

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html',
  styleUrls: ['./car-view.component.css']
})
export class CarViewComponent implements OnInit {
  cars$ = this.store.select(selectCar);

  constructor(private store: Store) {
  }

  ngOnInit() {

  }
}
