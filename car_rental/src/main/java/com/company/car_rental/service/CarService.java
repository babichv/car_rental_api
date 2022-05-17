package com.company.car_rental.service;

import com.company.car_rental.entity.CarEntity;
import com.company.car_rental.exception.CarNotFoundException;
import com.company.car_rental.exception.NumberAlreadyExistException;
import com.company.car_rental.model.Car;
import com.company.car_rental.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class CarService {
    @Autowired
    CarRepository carRepository;
    public CarEntity create(CarEntity car) throws NumberAlreadyExistException {
        if (carRepository.findByNumber(car.getNumber()) != null){
            throw  new NumberAlreadyExistException("Car with this number already exist");
        }
        return carRepository.save(car);
    }

    public Car findOne(long id) throws CarNotFoundException {
        CarEntity car = carRepository.findById(id).get();
        if (car == null){
            throw new CarNotFoundException("Car not found");
        }
        return Car.toModel(car);
    }

    public long delete(long id) throws CarNotFoundException {
        carRepository.deleteById(id);
        return id;
    }
}
