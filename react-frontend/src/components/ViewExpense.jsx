import './styles/ViewExpense.css'

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
      <div className='single-container'>
        <h2>Expense Details</h2>
        <div className='display-container'>
          <div>{this.state.expense.title}</div>
          <label>Expense Title</label>
        </div>
        <div className='display-container'>
          <div>${this.state.expense.amount}</div>
          <label>Expense Amount</label>
        </div>
        <div className='display-container'>
          <div>{this.state.expense.description}</div>
          <label>Expense Description</label>
        </div>
        <div className='display-container'>
          <div>{this.state.expense.date}</div>
          <label>Expense Date</label>
        </div>
        <div className='display-container'>
          <div>{this.state.expense.category}</div>
          <label>Expense Category</label>
        </div>
        <div className='button-container'>
          <button onClick={()=> this.handleBack()} className='button-59'>Back</button>
        </div>
      </div>
    );
  }
}

export default withRouter(ViewExpense);