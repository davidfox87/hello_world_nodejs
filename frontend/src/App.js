import React from 'react'
import './App.css';

import About from './routes/About';
import Projects from './routes/Projects';
import Nav from './routes/Nav';


import {
  BrowserRouter,
  Routes,
  Route,

} from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
    </BrowserRouter>


  )
}

export default App;
