import React from 'react';

import { Provider } from 'react-redux';
import { configureStore } from './store';

import './App.css';

import Nav from './components/Nav/Nav';
import NewsList from './components/NewsList/NewsList';

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Nav/>
      <NewsList/>
    </div>
    </Provider>
  );
}

export default App;
