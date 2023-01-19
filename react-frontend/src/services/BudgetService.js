import axios from "axios";

const BUDGET_API_BASE_URL = 'http://localhost:8080/api/v1/view-all'

class BudgetService{
  getBudgets(){
    return axios.get(BUDGET_API_BASE_URL)
  }

  createBudget(budget){
    return axios.post(BUDGET_API_BASE_URL, budget)
  }

}

export default new BudgetService()