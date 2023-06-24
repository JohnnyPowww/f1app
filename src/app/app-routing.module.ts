import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverComponent } from './components/driver/driver.component';
import { DriversComponent } from './components/drivers/drivers.component';

const routes: Routes = [
    { path: '', component: DriversComponent},
    { path: 'driver/:id', component: DriverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
