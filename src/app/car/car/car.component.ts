import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectCar, selectCars} from "./store/car.selectors";
import {addNewCar, removeCar, setCarList} from "./store/car.actions";
import {Car} from "./store/car.reducer";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars$ = this.store.select(selectCars);

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

  addModelCar() {
    const makes = [
      'fiat',
      'chevrolet',
      'bmw',
      'peugeot',
      'renault',
      'cherry'
    ];
    const years = [
      '2003',
      '2010',
      '2013',
      '2015',
      '2019',
      '2020',
      '2022',
      '2023'
    ];
    const models = [
      'Capitiva',
      'strada',
      'Corsa',
      '207',
      'onix',
      'sandero',
      'Tiggo 7'
    ];
    let make = makes[Math.floor(Math.random() * makes.length)]
    let year = years[Math.floor(Math.random() * years.length)]
    let model = models[Math.floor(Math.random() * models.length)]

    let car: Car = {
      id: String(Math.floor(Math.random() * 50)),
      year: year,
      make: make,
      model: model
    }

    this.store.dispatch(addNewCar({addCar: car}))
  }

  removeCar(id: number) {
    this.store.dispatch(removeCar({removeCar: +id}))
  }

}
