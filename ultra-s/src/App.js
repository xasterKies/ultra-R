import React from 'react';
import Navbar from './Components/pages/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'



function App() {
  return (
       <Router>
        <Navbar/>
        <Switch>
          <Route path='/'/>
        </Switch>
     </Router>
     
  
  )
}

export default App;
