package com.pierrepnguyen.springbootbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pierrepnguyen.springbootbackend.exception.ResourceNotFoundException;
import com.pierrepnguyen.springbootbackend.model.Budget;
import com.pierrepnguyen.springbootbackend.repository.BudgetRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class BudgetController {
  
  @Autowired
  private BudgetRepository budgetRepository;

  // get all
  @GetMapping("/view-all")
  public List<Budget> getAllBudgets(){
    return budgetRepository.findAll();
  }

  // create expense rest api
  @PostMapping("/expense")
  public Budget createBudget(@RequestBody Budget budget){
    return budgetRepository.save(budget);
  }

  // get expense by ID rest api
  @GetMapping("/expense/{id}")
  public ResponseEntity<Budget> getBudgetById(@PathVariable Long id){
    Budget expense = budgetRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Expense does not exist with " + id));
    return ResponseEntity.ok(expense);
  }
}
