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
        <BottomFiveByPending/>
        <FilteredByDateRange/>
        </div>
      <div className="grid-container">
        <TopTenByProduced/>
        <TopFiveByRejected/>
      </div>      
    </div>
  );
}

export default App;
