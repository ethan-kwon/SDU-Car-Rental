import Car from "../models/Car";
import {cars} from "../mocks/CarModels";

function getAllCars(): Car[] {
    return cars;
}