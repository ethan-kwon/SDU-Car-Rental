package com.sdu.car.rental.backend.controllers;

import com.sdu.car.rental.backend.models.Car;
import com.sdu.car.rental.backend.services.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/cars")
public class CarRestController {
    private final CarService carService;

    @Autowired
    public CarRestController(CarService carService) {
        this.carService = carService;
    }


    @GetMapping
    public List<Car> getAllCars() {
        return carService.getAllCars();
    }
}
