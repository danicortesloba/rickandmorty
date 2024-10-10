import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Card from './components/Card'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="container">
     <Router>
      <h1>Rick and Morty</h1>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:id" element={<Card  />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
