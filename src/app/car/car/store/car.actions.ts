import {createAction, props} from "@ngrx/store";
import {Car} from "./car.reducer";
import {Update} from "@ngrx/entity";

export const setCarList = createAction('[App] inicia a lista de carros', props<{cars: Car[]}>())
export const addNewCar = createAction('[App] Adiciona novo carro', props<{addCar: Car}>())
export const removeCar = createAction('[App] Remove carro', props<{removeCar: number}>())
export const editCar = createAction('[App] edita carro', props<{editCar: Update<Car>}>())
