import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Home from './Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes> {/* Use Routes to wrap your routes */}
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} /> {/* Use 'element' instead of 'component' */}
          <Route path='/Shop' element={<Shop />} /> {/* Use 'element' instead of 'component' */}
        </Routes>
      </div>
    </Router>
  );
}


export default App;
