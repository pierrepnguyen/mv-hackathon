package com.pierrepnguyen.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pierrepnguyen.springbootbackend.model.Budget;

@Repository
public interface BudgetRepository extends JpaRepository<Budget, Long>{

}
