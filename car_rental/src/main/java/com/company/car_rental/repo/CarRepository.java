package com.company.car_rental.repo;

import com.company.car_rental.models.Car;
import org.springframework.data.repository.CrudRepository;

public interface CarRepository extends CrudRepository <Car,Long> {
}
