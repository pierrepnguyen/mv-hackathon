import './styles/AllBudgets.css'

import React, { Component } from 'react';

import BudgetService from '../services/BudgetService'
import {withRouter} from '../services/withRouter'

class AllBudgets extends Component {
  constructor(props){
    super(props)

    this.state = {
      expenses : []
    }
  }

  editBudget(id){
    this.props.navigate(`/update-expense/${id}`)
  }
  
  deleteBudget(id){
    BudgetService.deleteBudget(id).then(res=>{
      this.setState({expenses: this.state.expenses.filter(expense => expense.id !== id)})
    })
  }

  viewBudget(id){
    this.props.navigate(`/view-expense/${id}`)
  }

  componentDidMount(){
    BudgetService.getBudgets().then((res)=>{
      this.setState({expenses: res.data})
    })
  }
  
  render() {
    return (
      <div>
        <h2>All Expenses</h2>
        <div className='expenseTable'>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.expenses.map(
                  expense =>
                  <tr key={expense.id}>
                    <td>{expense.title}</td>
                    <td>${expense.amount}</td>
                    <td>{expense.category}</td>
                    <td className='data-button'>
                      <button onClick={()=> this.editBudget(expense.id)} className='button-59'>Update</button>
                      <button onClick={()=> this.deleteBudget(expense.id)} className='button-59'>Delete</button>
                      <button onClick={()=> this.viewBudget(expense.id)} className='button-59'>View</button>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withRouter(AllBudgets);