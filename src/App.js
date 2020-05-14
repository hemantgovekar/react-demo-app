import React from 'react';
import './App.css';
import Header from './component/header'
import Users from './component/users'
import Gitusers from './component/gitusers'
import { useSelector } from 'react-redux'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)


  return (
    <div className="App">
      <header className="App-header">
        <div>
          Counter : {counter} <br />
          <Header name="GIT hub users" /><hr />
          {isLogged && <h3><Gitusers /> </h3>}


        </div>
      </header>
    </div>
  );
}

export default App;
