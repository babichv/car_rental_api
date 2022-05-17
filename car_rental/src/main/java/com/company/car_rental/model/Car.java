package com.company.car_rental.model;

import com.company.car_rental.entity.CarEntity;

public class Car {
    private String brand;
    private String model;
    private String number;
    private String body;
    private String fuel;
    private int price;

    public Car() {
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getFuel() {
        return fuel;
    }

    public void setFuel(String fuel) {
        this.fuel = fuel;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public static Car toModel(CarEntity entity){
        Car model = new Car();
        model.setBrand(entity.getBrand());
        model.setModel(entity.getModel());
        model.setNumber(entity.getNumber());
        model.setBody(entity.getBody());
        model.setFuel(entity.getFuel());
        model.setPrice(entity.getPrice());
        return model;
    }
}
