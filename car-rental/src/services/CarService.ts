import Car from "../models/Car";
import {cars} from "../mocks/CarModels";

export function getAllCars(): Car[] {
    return cars;
}
