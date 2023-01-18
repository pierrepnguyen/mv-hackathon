package com.pierrepnguyen.springbootbackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="budget")
public class Budget {
  
  // IDENTIFY
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @Column(name = "title")
  private String title;

  @Column(name = "amount")
  private float amount;

  @Column(name = "description")
  private String description;

  @Column(name = "date")
  private String date;

  public Budget(){
    
  }

  public Budget(String title, float amount, String description, String date){
    super();
    this.title = title;
    this. amount = amount;
    this.description = description;
    this.date = date;
  }

  // GETTERS & SETTERS
  public long getId() {
    return this.id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getTitle() {
    return this.title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public float getAmount() {
    return this.amount;
  }

  public void setAmount(float amount) {
    this.amount = amount;
  }

  public String getDescription() {
    return this.description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getDate() {
    return this.date;
  }

  public void setDate(String date) {
    this.date = date;
  }
}
