import { Component } from '@angular/core';
import { DriversService } from './services/drivers.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from './models/driver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'f1app';
  drivers: Driver[] = [];
  years: number[] = [];
  selectedYear: number = 2023;

 constructor(private driversService: DriversService)
 {
  const startYear = 2023;
  const endYear = 1950;

  for (let year = startYear; year >= endYear; year--) {
    this.years.push(year);
  }

 }

 ngOnInit() {
    this.getDrivers('2023')
  }

 getDrivers(year:string)
  {
    this.driversService.getDrivers(year).subscribe((drivers: any) => {
      this.drivers = drivers["MRData"]["DriverTable"]["Drivers"];
        this.drivers.forEach(driver => {
          this.driversService.getDriverImage(driver)
        });
    })
  }


}
