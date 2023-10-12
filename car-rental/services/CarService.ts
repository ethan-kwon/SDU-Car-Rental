import Car from "../models/Car";
import {cars} from "./CarModels";

function getAllCars(): Car[] {
    return cars;
}