import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Introduce from './pages/introduce/Introduce'
import Quiz from './pages/quiz/Quiz'
function App() {
  return (
    <div className='container flex min-h-screen justify-center items-center body'>
      <Router>
        <Routes>
          <Route path='/' element={<Introduce />} />
          <Route path='/quiz/:amount' element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
