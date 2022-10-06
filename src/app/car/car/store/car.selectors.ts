import {createFeatureSelector, createSelector} from "@ngrx/store";
import {carAdapter, CarState} from "./car.reducer";
import {selectRouteParams} from "../../../router.selectors";

export const carFeatureSelector = createFeatureSelector<CarState>('cars');

const { selectEntities, selectAll} = carAdapter.getSelectors();

export const selectCarEntities = createSelector(carFeatureSelector, selectEntities);

export const selectCars = createSelector(carFeatureSelector, selectAll);

export const selectCar = createSelector(
  selectCarEntities,
  selectRouteParams,
  (cars, { carId }) => cars[carId]
)
