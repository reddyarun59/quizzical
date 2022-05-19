import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';



function App() {
  return (
    <BrowserRouter>
      <div className="app" style={{backgroundImage:"url('./70.-Honeydew.jpg')", height:"100vh"}}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/quiz" element={<Quiz/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
