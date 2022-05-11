package com.company.car_rental.controllers;

import com.company.car_rental.models.Car;
import com.company.car_rental.repo.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CarController {

    @Autowired
    private CarRepository carRepository;
    @GetMapping("/")
    public String index(Model model){
        Iterable<Car> cars = carRepository.findAll();
        model.addAttribute("cars", cars);
        return "index.html";
    }
}
