import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// Components
import Header from './components/Header'
import AllBudgets from './components/AllBudgets';
import ViewExpense from './components/ViewExpense';
import CreateExpense from './components/CreateExpense';

function App() {
  return (
    <div className='main'>
      <Router>
        <Header/>
        <div className='componentContainer'>
          <Routes>
            <Route exact path='/' element={<AllBudgets/>}></Route>
            <Route exact path='/view-all' element={<AllBudgets/>}></Route>
            <Route path='/add-expense' element={<CreateExpense/>}></Route>
            {/* <Route path='/update-expense/:id' element={<UpdateExpense/>}></Route> */}
            <Route path='/view-expense/:id' element={<ViewExpense/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
