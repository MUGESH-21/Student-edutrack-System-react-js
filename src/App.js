
import React from 'react';
import SideNav from './Componrnts/SideNav.js';
import Content from './Componrnts/Content.js';


import './App.css';

const App = () => {
  return (
    <div className="App">
      <SideNav />
      <div style={{ marginLeft: '250px'}}>
        <Content/>
      </div>
    </div>
  );
};

export default App;
