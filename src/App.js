import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Shop from './components/Shop';


function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className='container'>
      <Shop></Shop>
      </div>
    </React.Fragment>
  );
};

export default App;
