import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import DisplayAi from './components/DisplayAi'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/chat' element={<DisplayAi/>}/>
      </Routes>
    </Router>
  )
}

export default App