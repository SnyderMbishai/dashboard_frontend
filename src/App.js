import React from 'react';
import './App.css';
import TopTenByProduced from './components/topTenCountriesProduced';
import TopFiveByRejected from './components/topFiveRejected';
import BottomFiveByPending from './components/bottomFiveByPending';
import FilteredByDateRange from './components/filteredByDate';
import './components/graphs.css';

function App() {
  return (
    <div className="App">  
      <h1>PBP Production Dashboard</h1>
      <div className="grid-container">
        <div className="container card"><BottomFiveByPending/></div>
        <div className="container card"><FilteredByDateRange/></div>          
      </div>
      <div className="grid-container">
        <div className="container card"><TopTenByProduced/></div>
        <div className="container card"><TopFiveByRejected/></div>    
      </div>      
    </div>
  );
}

export default App;
