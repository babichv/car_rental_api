package com.company.car_rental.repository;

import com.company.car_rental.entity.CarEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<CarEntity, Long> {
    CarEntity findByNumber(String number);
    Iterable<CarEntity> findAllByBrand(String brand);
    Iterable<CarEntity> findAllByBrandAndModel(String brand, String model);
}
