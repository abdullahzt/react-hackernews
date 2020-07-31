import React from 'react';
import './App.css';

import Nav from './components/Nav/Nav';
import NewsList from './components/NewsList/NewsList';

function App() {
  return (
    <div className="App">
      <Nav/>
      <NewsList/>
    </div>
  );
}

export default App;
