import React from 'react';
import { Provider } from 'react-redux'
import store from './store/index'
import Filter from './components/Filter'
import Table from './components/Table'
import Header from './components/Header'

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Filter/>
        <Table/>
      </div>
    </Provider>
  );
}

export default App;
