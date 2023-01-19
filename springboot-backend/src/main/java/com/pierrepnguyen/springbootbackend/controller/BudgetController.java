package com.pierrepnguyen.springbootbackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
  @GetMapping("/expenses")
  public List<Budget> getAllBudgets(){
    return budgetRepository.findAll();
  }

  // create expense rest api
  @PostMapping("/expenses")
  public Budget createBudget(@RequestBody Budget budget){
    return budgetRepository.save(budget);
  }

  // get expense by ID rest api
  @GetMapping("/expenses/{id}")
  public ResponseEntity<Budget> getBudgetById(@PathVariable Long id){
    Budget expense = budgetRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Expense does not exist with " + id));
    return ResponseEntity.ok(expense);
  }

  // update expense rest api
  @PutMapping("/expenses/{id}")
  public ResponseEntity<Budget> updateBudget(@PathVariable Long id, @RequestBody Budget budgetDetails){
    // get expense obj
    Budget expense = budgetRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Expense does not exist with " + id));
    
    // update info
    expense.setTitle(budgetDetails.getTitle());
    expense.setAmount(budgetDetails.getAmount());
    expense.setDescription(budgetDetails.getDescription());
    expense.setDate(budgetDetails.getDate());
    expense.setCategory(budgetDetails.getCategory());

    Budget updatedExpense = budgetRepository.save(expense);
    
    return ResponseEntity.ok(updatedExpense);
  }

  // delete expense rest api
  @DeleteMapping("/expenses/{id}")
  public ResponseEntity<Map<String, Boolean>> deleteBudget(@PathVariable Long id){
    // get expense obj
    Budget expense = budgetRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Expense does not exist with " + id));
    
    budgetRepository.delete(expense);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return ResponseEntity.ok(response);
  }
}
