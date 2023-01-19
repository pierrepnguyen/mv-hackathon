import React, { Component } from 'react';

class AllBudgets extends Component {
  constructor(props){
    super(props)

    this.state = {
      expenses : []
    }
  }
  
  render() {
    return (
      <div>
        <h2>Monthly Budget</h2>
        <Link>
          <button>Add Expense</button>
        </Link>
        <div className='expenseTable'>
          <table>
            <thead>
              <tr>Expense Title</tr>
              <tr>Expense Amount</tr>
              <tr>Expense Category</tr>
              <tr>Actions</tr>
            </thead>
            <tbody>
              {
                this.state.expenses.map(
                  expense =>
                  <tr key={expense.id}>
                    <td>{expense.title}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.category}</td>
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

export default AllBudgets;