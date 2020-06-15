import { VehicleModel } from "./vehicle-model";
import { Guid } from "guid-typescript";

export class Car extends VehicleModel {

  id: string;

  engine: string;
  doors: number;
  wheels: number;
  carBodyType: string;
}
