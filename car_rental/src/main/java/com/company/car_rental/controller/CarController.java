package com.company.car_rental.controller;

import com.company.car_rental.entity.CarEntity;
import com.company.car_rental.exception.CarNotFoundException;
import com.company.car_rental.exception.NumberAlreadyExistException;
import com.company.car_rental.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cars")
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping("/")
    public ResponseEntity getCars(){
        try {
            return ResponseEntity.ok(carService.findAll());
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body("Error!");
        }
    }

    @GetMapping("/search")
    public ResponseEntity search(@RequestParam String brand, @RequestParam String model){
        try {
            return ResponseEntity.ok(carService.findAllByBrandAndModel(brand, model));
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body("Error");
        }
    }

    @GetMapping
    public ResponseEntity getCar(@RequestParam long id){
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

    @PatchMapping("/{id}/edit")
    public ResponseEntity update(@PathVariable long id, @RequestBody CarEntity car){
        try {
            carService.update(id, car);
            return ResponseEntity.ok().body("Updated successful.");
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
