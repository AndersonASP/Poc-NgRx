import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'car'
  },
  {
    path: 'car',
    loadChildren: () => import('./car/car/car.module').then(m => m.CarModule)
  },
  {
    path: 'ngRxLet',
    loadChildren: () => import('./teste-let-directive/teste-let-directive.module').then(m => m.TesteLetDirectiveModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
