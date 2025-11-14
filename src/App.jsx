import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import MechanicsPage from './pages/MechanicsPage'
import ExercisesPage from './pages/ExercisesPage'
import AnimationPage from './pages/AnimationPage'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <div className="bg-background text-foreground min-h-screen">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/mechanics" element={<MechanicsPage />} />
              <Route path="/exercises" element={<ExercisesPage />} />
              <Route path="/animation/:id" element={<AnimationPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App