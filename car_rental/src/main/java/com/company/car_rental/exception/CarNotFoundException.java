package com.company.car_rental.exception;

public class CarNotFoundException extends Exception{
    public CarNotFoundException(String message) {
        super(message);
    }
}
