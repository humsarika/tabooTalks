import React from 'react';
import Navbar from './components/Navbar';
// import { BroweserRouter as Router, Switch, Route} from 'react-router-dom';
import { Switch ,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Route>
        <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch> 
      </Route>
    
    </>
    
  );
}

export default App;
