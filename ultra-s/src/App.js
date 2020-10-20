import React from 'react';
import Navbar from './Components/pages/Navbar';
import { Router } from 'react-router-dom'


function App() {
  return (
   <div className="App">
     <Router>
        <Navbar/>
     </Router>
     
   </div>
  )
}

export default App;
