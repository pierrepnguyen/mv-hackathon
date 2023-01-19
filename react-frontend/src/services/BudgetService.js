import axios from "axios";

const BUDGET_API_BASE_URL = 'http://localhost:8080/api/v1/expenses'

class BudgetService{
  getBudgets(){
    return axios.get(BUDGET_API_BASE_URL)
  }

  createBudget(budget){
    return axios.post(BUDGET_API_BASE_URL, budget)
  }

  getBudgetById(budgetId){
    return axios.get(BUDGET_API_BASE_URL + '/' + budgetId)
  }

  updateBudget(budget, budgetId){
    return axios.put(BUDGET_API_BASE_URL + '/' + budgetId, budget)
  }

  deleteBudget(budgetId){
    return axios.delete(BUDGET_API_BASE_URL + '/' + budgetId)
  }
}

export default new BudgetService()