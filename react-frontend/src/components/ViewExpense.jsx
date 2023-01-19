import React, { Component } from 'react';

import { withRouter } from '../services/withRouter';
import BudgetService from '../services/BudgetService';

class ViewExpense extends Component {
  constructor(props){
    super(props)

    let {id} = props.params;
    this.state={
      id:id,
      expense: {}
    }
  }

  handleBack(){
    this.props.navigate('/view-all')
  }

  componentDidMount(){
    BudgetService.getBudgetById(this.state.id).then((res)=>{
      this.setState({expense: res.data})
    })
  }
  
  render() {
    return (
      <div>
        <h2>Expense Details</h2>
        <div>
          <label>Expense Title:</label>
          <div>{this.state.expense.title}</div>
        </div>
        <div>
          <label>Expense Amount:</label>
          <div>{this.state.expense.amount}</div>
        </div>
        <div>
          <label>Expense Description:</label>
          <div>{this.state.expense.description}</div>
        </div>
        <div>
          <label>Expense Date:</label>
          <div>{this.state.expense.date}</div>
        </div>
        <div>
          <label>Expense Category:</label>
          <div>{this.state.expense.category}</div>
        </div>
        <button>Back</button>
      </div>
    );
  }
}

export default withRouter(ViewExpense);