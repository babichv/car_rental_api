package com.company.car_rental.repository;

import com.company.car_rental.entity.CarEntity;
import org.springframework.data.repository.CrudRepository;

public interface CarRepository extends CrudRepository <CarEntity,Long> {
    CarEntity findByNumber(String number);
}
