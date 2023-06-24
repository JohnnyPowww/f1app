import { Component } from '@angular/core';
import { Driver } from 'src/app/models/driver';
import { DriversService } from 'src/app/services/drivers.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})

export class DriversComponent {
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
