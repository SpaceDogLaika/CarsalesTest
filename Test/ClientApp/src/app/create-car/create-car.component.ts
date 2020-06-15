import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Car } from '../_models/car-model';
import { Guid } from 'guid-typescript';
import { VehicleTypeEnum } from '../_models/vehicle-type.enum';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  @Inject('BASE_URL') baseUrl;
  formGroup: FormGroup;
  car: Car;
  failed: boolean;
  submitted: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  createCarForm = new FormGroup({
    make: new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required]),
    engine: new FormControl('', [Validators.required]),
    doors: new FormControl('', [Validators.required]),
    wheels: new FormControl('', [Validators.required]),
    bodyType: new FormControl('', [Validators.required])
  })

  get make() {
    return this.createCarForm.get('make') as FormControl;
  }

  get model() {
    return this.createCarForm.get('model') as FormControl;
  }

  get engine() {
    return this.createCarForm.get('engine') as FormControl;
  }

  get doors() {
    return this.createCarForm.get('doors') as FormControl;
  }

  get wheels() {
    return this.createCarForm.get('wheels') as FormControl;
  }

  get bodyType() {
    return this.createCarForm.get('bodyType') as FormControl;
  }

  submit() {
    //left only 'required' validation errors here for demonstration purposes
    if (!this.make.hasError('required') &&
      !this.model.hasError('required') &&
      !this.engine.hasError('required') &&
      !this.doors.hasError('required') &&
      !this.wheels.hasError('required') &&
      !this.bodyType.hasError('required')) {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      headers = headers.append('Accept', '*/*');
      this.car = this.createCarForm.value as Car;
      this.car.id = Guid.raw();
      this.car.vehicleType = VehicleTypeEnum.Car;

      this.http.post('https://localhost:44398/' + 'car', this.car, { headers: headers }).subscribe();
      this.failed = false;
      this.submitted = true;
    } else {
      this.failed = true;
      console.log("One or more validation errors occured!");
    }
  }

  getFormValidationErrors() {
    Object.keys(this.createCarForm.controls).forEach(key => {

      const controlErrors: ValidationErrors = this.createCarForm.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }
}
