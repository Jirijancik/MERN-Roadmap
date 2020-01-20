import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import CreateUser from './components/CreateUser';

function App() {
  return (

    <Router>
      <Route path="/" exact component={MainPage}></Route>
      <Route path="/create" exact component={CreateUser}></Route>
    </Router>

  );
}

export default App;
