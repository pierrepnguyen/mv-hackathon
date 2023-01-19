import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// Components
import Header from './components/Header'
import AllBudgets from './components/AllBudgets';
import CreateExpense from './components/CreateExpense';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <div className='componentContainer'>
          <Routes>
            <Route exact path='/' element={<AllBudgets/>}></Route>
            <Route exact path='/view-all' element={<AllBudgets/>}></Route>
            <Route path='/add-expense' element={<CreateExpense/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
