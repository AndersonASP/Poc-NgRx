import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CarComponent} from "./car.component";
import {CarViewComponent} from "./car-view/car-view.component";
import {CarEditComponent} from "./car-edit/car-edit.component";

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: CarComponent
  },
  {
    path: 'view/:carId',
    component: CarViewComponent
  },
  {
    path: 'edit/:carId',
    component: CarEditComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CarRoutingModule { }
