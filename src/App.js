import React from 'react';
import './App.css';
import TopTenByProduced from './components/topTenCountriesProduced';
import TopFiveByRejected from './components/topFiveRejected';
import BottomFiveByPending from './components/bottomFiveByPending';
import FilteredByDateRange from './components/filteredByDate';

function App() {
  return (
    <div className="App">
      <TopTenByProduced/>
      <TopFiveByRejected/>
      <BottomFiveByPending/>
      <FilteredByDateRange/>
    </div>
  );
}

export default App;
