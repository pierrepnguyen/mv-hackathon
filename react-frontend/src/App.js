import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// Components
import AllBudgets from './components/AllBudgets';
import Header from './components/Header'

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <div className='componentContainer'>
          <Routes>
            <Route exact path='/' element={<AllBudgets/>}></Route>
            <Route exact path='/expenses' element={<AllBudgets/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
