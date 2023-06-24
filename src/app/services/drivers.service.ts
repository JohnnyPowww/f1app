import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from '../models/driver';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  drivers: Driver[] = []
  constructor(private http: HttpClient) { }

  public getDrivers(year: string): Observable<any>
  {
   return this.http.get<any>(`http://ergast.com/api/f1/${year}/drivers.json`)
  }

  public getDriverImage(driver:Driver)
  {
    var name = driver.url.replace('http://en.wikipedia.org/wiki/', '');
    this.http.get<any>(`https://en.wikipedia.org/api/rest_v1/page/summary/${name}`)
      .subscribe((img: any) => {
        driver.imageUrl = img["thumbnail"]["source"]
     });
  }

  public getDriver(lastname:string): Observable<any>
  {
    return this.http.get<any>(`http://ergast.com/api/f1/drivers/${lastname}.json`)
  }

  public getDriverDescription(link:string): Observable<any>
  {
    var name = link.replace('http://en.wikipedia.org/wiki/', '');
    return this.http.get<any>(`https://pl.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${name}&origin=*`)
  }


}
