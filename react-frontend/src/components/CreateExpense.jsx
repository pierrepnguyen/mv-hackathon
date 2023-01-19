import React, { Component } from 'react';

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
  }
  render() {
    return (
      <div>
        <div>
          <h2>Add Expense</h2>
          <form action="post">
            
          </form>
        </div>
      </div>
    );
  }
}

export default CreateExpense;