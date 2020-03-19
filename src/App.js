import React from 'react';
import Navbar from './components/layout/Navbar';
import Services from './components/site/Services';
import { connect } from 'react-redux';
import { getData, getGroup } from './store/actions/cartActions';
import SideTabs from './components/SideTabs'

const App = () =>  {
  return (
    <div className="App sdsds">
      <Navbar />
      <SideTabs />
      
    </div>
  )
}

export default App;
