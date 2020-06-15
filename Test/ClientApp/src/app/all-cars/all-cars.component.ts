import { Component, OnInit, Inject } from '@angular/core';
import { Car } from '../_models/car-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements OnInit {
  public cars: Car[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Car[]>(baseUrl + 'car').subscribe(result => {
      this.cars = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}
