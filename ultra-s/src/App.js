import React from 'react';
import Navbar from './Components/pages/Navbar';
import { Router } from 'react-router-dom'


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
