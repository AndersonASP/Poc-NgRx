import { Component, OnInit } from '@angular/core';
import {selectCar} from "../store/car.selectors";
import {Store} from "@ngrx/store";
import {FormControl, FormGroup} from "@angular/forms";
import {editCar} from "../store/car.actions";
import {Car} from "../store/car.reducer";
import {Update} from "@ngrx/entity";
import {ofType} from "@ngrx/effects";
import {switchMap} from "rxjs";
import {Route, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  cars$ = this.store.select(selectCar);
  // @ts-ignore
  form: FormGroup;
  constructor(private store: Store, private route: Router) { }

  ngOnInit(): void {
    this.form = this.createForm();
    this.cars$.subscribe((r) => {
     // @ts-ignore
      const test: Car = r;
      this.form.patchValue(test);
    })
  }

  createForm() {
    return  new FormGroup({
      make: new FormControl(''),
      model: new FormControl(''),
      year: new FormControl(2022),
    })
  }
  saveEditCar(carId: any) {
    const updateCar: Update<Car> = {
      id: carId,
      changes: {...this.form.value}
    }
    this.store.dispatch(editCar({editCar: updateCar}))
    this.route.navigate(['/car'])
  }
}
