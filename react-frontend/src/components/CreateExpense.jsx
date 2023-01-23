import './styles/ExpenseForm.css'

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// API & Routing
import { withRouter } from '../services/withRouter';
import BudgetService from '../services/BudgetService';

class CreateExpense extends Component {
  constructor(props){
    super(props)

    this.state={
      title: '',
      amount: 0,
      description: '',
      date: '',
      category: ''
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.saveExpense = this.saveExpense.bind(this)
  }

  saveExpense=async(e)=>{
    e.preventDefault();
    let expense = {
      title: this.state.title,
      amount: this.state.amount,
      description: this.state.description,
      date: this.state.date,
      category: this.state.category
    }
    console.log('new input expense =>' + JSON.stringify(expense))
    
    // AXIOS POST method & rerender
    BudgetService.createBudget(expense)
    await this.props.navigate('/view-all')
  }

  changeHandler=(e)=>{
    const {name, value} = e.target;
    this.setState({[name] : value})
  }

  render() {
    return (
      <div>
        <div className='container-form'>
          <h2>Add Expense</h2>
          <div className='form-container'>
            <form action="post" className='form-style'>
              <ul>
                <li>
                  <label htmlFor="">Title: </label>
                  <input type="text" placeholder='NJ Home Rent' name='title' value={this.state.title} onChange={this.changeHandler}/>
                </li>
                <li>
                  <label htmlFor="">Amount: </label>
                  <input type="text" placeholder='1000.00' name='amount' value={this.state.amount} onChange={this.changeHandler}/>
                </li>
                <li>
                  <label htmlFor="">Description: </label>
                  <input type="text" placeholder='' name='description' value={this.state.description} onChange={this.changeHandler}/>
                </li>
                <li>
                  <label htmlFor="">Date: </label>
                  <input type="text" placeholder='1/1/23' name='date' value={this.state.date} onChange={this.changeHandler}/>
                </li>
                <li>
                  <label htmlFor="">Category: </label>
                  <input type="text" placeholder='Housing' name='category' value={this.state.category} onChange={this.changeHandler}/>
                </li>

                <li className='button-li'>
                  <button onClick={this.saveExpense} className='button-59'>Save</button>
                  <Link to={'/view-all'}>
                    <button className='button-59'>Cancel</button>
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateExpense);