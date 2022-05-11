package com.company.car_rental.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String brand;
    private String model;
    private int price;
    private Fuel fuel;
    private Body body;

    public long getId(){
        return id;
    }

    public void setId(long id){
        this.id = id;
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

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Fuel getFuel() {
        return fuel;
    }

    public void setFuel(Fuel fuel) {
        this.fuel = fuel;
    }

    public Body getBody() {
        return body;
    }

    public void setBody(Body body) {
        this.body = body;
    }

    protected Car(){}
    public Car(String brand, String model, int price, Fuel fuel, Body body) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.fuel = fuel;
        this.body = body;
    }
}
enum Fuel{
    GAS,
    DIESEL
}
enum Body{
    SEDAN,
    WAGON,
    COUPE,
    SUV,
    CROSSOVER
}
