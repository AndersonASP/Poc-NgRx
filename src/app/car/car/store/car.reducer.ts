import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {createReducer, on} from "@ngrx/store";
import {addNewCar, editCar, removeCar, setCarList} from "./car.actions";

export interface Car {
  id: string,
  year: string,
  make: string,
  model: string
}

export type CarState = EntityState<Car>;

export const carAdapter:  EntityAdapter<Car> = createEntityAdapter<Car>({
  selectId: (car) => car.id,
});

const initialState = carAdapter.getInitialState();

export const reducer = createReducer<CarState>(
  initialState,
  on(setCarList, (state, {cars}) => carAdapter.addMany(cars, state)),
  on(addNewCar, (state, {addCar}) => carAdapter.addOne(addCar, state)),
  on(removeCar, (state, {removeCar}) => carAdapter.removeOne(removeCar, state)),
  on(editCar, (state, {editCar}) => carAdapter.updateOne(editCar, state))
);
