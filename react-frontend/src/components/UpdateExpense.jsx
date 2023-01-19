import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// API & Routing
import { withRouter } from '../services/withRouter';
import BudgetService from '../services/BudgetService';

class UpdateExpense extends Component {
  constructor(props){
    super(props)

    let {id} = props.params;
    this.state={
      id: id,
      title: '',
      amount: 0,
      description: '',
      date: '',
      category: ''
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.updateBudget = this.updateBudget.bind(this)
  }

  updateBudget=async(e)=>{
    e.preventDefault();
    let expense = {
      title: this.state.title,
      amount: this.state.amount,
      description: this.state.description,
      date: this.state.date,
      category: this.state.category
    }
    console.log('new input expense =>' + JSON.stringify(expense))
    
    // AXIOS PUT method & rerender
    BudgetService.updateBudget(expense, this.state.id)
    await this.props.navigate('/view-all')
  }

  changeHandler=(e)=>{
    const {name, value} = e.target;
    this.setState({[name] : value})
  }

  componentDidMount(){
    BudgetService.getBudgetById(this.state.id).then((res)=>{
      let expense = res.data;
      this.setState({
        title: expense.title,
        amount: expense.amount,
        description: expense.description,
        date: expense.date,
        category: expense.category
      })
    })
  }

  render() {
    return (
      <div>
        <div>
          <h2>Update Expense</h2>
          <form action="post">
            <label htmlFor="">Title: </label>
            <input type="text" placeholder='NJ Home Rent' name='title' value={this.state.title} onChange={this.changeHandler}/>
            <label htmlFor="">Amount: </label>
            <input type="text" placeholder='1000.00' name='amount' value={this.state.amount} onChange={this.changeHandler}/>
            <label htmlFor="">Description: </label>
            <input type="text" placeholder='' name='description' value={this.state.description} onChange={this.changeHandler}/>
            <label htmlFor="">Date: </label>
            <input type="text" placeholder='1/1/23' name='date' value={this.state.date} onChange={this.changeHandler}/>
            <label htmlFor="">Category: </label>
            <input type="text" placeholder='Housing' name='category' value={this.state.category} onChange={this.changeHandler}/>

            <button onClick={this.updateBudget}>Update</button>
            <Link to={'/view-all'}>
              <button>Cancel</button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(UpdateExpense);