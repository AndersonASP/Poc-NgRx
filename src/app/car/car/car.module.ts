import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarComponent} from "./car.component";
import {CarViewComponent} from "./car-view/car-view.component";
import {RouterLink, RouterModule} from "@angular/router";
import {CarRoutingModule} from "./car-routing.module";
import {LetModule} from "@ngrx/component";
import { CarEditComponent } from './car-edit/car-edit.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CarComponent,
    CarViewComponent,
    CarEditComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        RouterModule,
        CarRoutingModule,
        LetModule,
        ReactiveFormsModule
    ]
})
export class CarModule { }
