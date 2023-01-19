import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import BudgetService from '../services/BudgetService'
import {withRouter} from '../services/withRouter'

class AllBudgets extends Component {
  constructor(props){
    super(props)

    this.state = {
      expenses : []
    }
  }

  componentDidMount(){
    BudgetService.getBudgets().then((res)=>{
      this.setState({expenses: res.data})
    })
  }
  
  render() {
    return (
      <div>
        <h2>Monthly Budget</h2>
        <Link to='/add-expense'>
          <button>Add Expense</button>
        </Link>
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
                    <td>{expense.amount}</td>
                    <td>{expense.category}</td>
                    <td>
                      <button>Update</button>
                      <button>Delete</button>
                      <button>View</button>
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