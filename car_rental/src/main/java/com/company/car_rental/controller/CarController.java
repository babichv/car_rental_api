package com.company.car_rental.controller;

import com.company.car_rental.entity.CarEntity;
import com.company.car_rental.exception.CarNotFoundException;
import com.company.car_rental.exception.NumberAlreadyExistException;
import com.company.car_rental.repository.CarRepository;
import com.company.car_rental.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cars")
public class CarController {

    @Autowired
    private CarService carService;
    
    @GetMapping("/")
    public ResponseEntity getCars(){
        try {
            return ResponseEntity.ok("Server start!");
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body("Error!");
        }

    }

    @PostMapping
    public ResponseEntity create(@RequestBody CarEntity car){
        try {
            carService.create(car);
            return ResponseEntity.ok("Car save!");
        } catch (NumberAlreadyExistException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e){
            return ResponseEntity.badRequest().body("Error!");
        }
    }

    @GetMapping
    public ResponseEntity getOneCar(@RequestParam long id){
        try {
            return ResponseEntity.ok(carService.findOne(id));
        }
        catch (CarNotFoundException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body("Error!");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteCar(@PathVariable long id){
        try {
            return ResponseEntity.ok(carService.delete(id));
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body("Error!");
        }
    }
}
