package com.company.car_rental.service;

import com.company.car_rental.entity.CarEntity;
import com.company.car_rental.exception.CarNotFoundException;
import com.company.car_rental.exception.NumberAlreadyExistException;
import com.company.car_rental.model.Car;
import com.company.car_rental.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarService {
    @Autowired
    CarRepository carRepository;

    public Iterable<CarEntity> findAll() throws CarNotFoundException {
        if (carRepository.findAll() == null){
            throw new CarNotFoundException("Cars not found");
        }
        return carRepository.findAll();
    }

    public CarEntity create(CarEntity car) throws NumberAlreadyExistException {
        if (carRepository.findByNumber(car.getNumber()) != null){
            throw  new NumberAlreadyExistException("Car with this number already exist");
        }
        return carRepository.save(car);
    }

    public long update(long id, CarEntity carEntity){
        if (carEntity != null) {
            CarEntity carInDb = carRepository.findById(id).get();
            carInDb.setBrand(carEntity.getBrand());
            carInDb.setModel(carEntity.getModel());
            carInDb.setBody(carEntity.getBody());
            carInDb.setFuel(carEntity.getFuel());
            carInDb.setNumber(carEntity.getNumber());
            carInDb.setPrice(carEntity.getPrice());
            carRepository.save(carInDb);
            return id;
        }
        return id;
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
