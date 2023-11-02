package com.sdu.car.rental.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "cars")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String manufacturer;
    private String model;

    private int seatsNumber;
    @Enumerated(EnumType.STRING)
    private CarType carType;
    private String color;

    private int pricePerDay;

    @Enumerated(EnumType.STRING)
    private TransmissionType transmissionType;

    public Car() {

    }

    public Car(String manufacturer, String model, int seatsNumber, CarType carType, String color, int pricePerDay, TransmissionType transmissionType) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.seatsNumber = seatsNumber;
        this.carType = carType;
        this.color = color;
        this.pricePerDay = pricePerDay;
        this.transmissionType = transmissionType;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getSeatsNumber() {
        return seatsNumber;
    }

    public void setSeatsNumber(int productionYear) {
        this.seatsNumber = productionYear;
    }

    public CarType getCarType() {
        return carType;
    }

    public void setCarType(CarType licenseNumber) {
        this.carType = licenseNumber;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getPricePerDay() {
        return pricePerDay;
    }

    public void setPricePerDay(int pricePerDay) {
        this.pricePerDay = pricePerDay;
    }

    public TransmissionType getTransmissionType() {
        return transmissionType;
    }

    public void setTransmissionType(TransmissionType transmissionType) {
        this.transmissionType = transmissionType;
    }
}
