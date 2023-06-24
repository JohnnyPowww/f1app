import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Driver } from 'src/app/models/driver';
import { DriversService } from 'src/app/services/drivers.service';
@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent {

  constructor(private driversService: DriversService, private route: ActivatedRoute){}

  driver: Driver = new Driver();
  description: string = ''
  async ngOnInit(){

      let id:string = this.route.snapshot.paramMap.get('id') ?? ""
      const drivers: any = await this.driversService.getDriver(id).toPromise();
      this.driver = drivers["MRData"]["DriverTable"]["Drivers"][0];
      await this.driversService.getDriverImage(this.driver);
  
      this.driversService.getDriverDescription(this.driver.url)
        .subscribe((description: any)=> {
          let index = Object.keys(description["query"]["pages"])[0]
          this.description = description["query"]["pages"][index]["extract"]
        })
  }

}
