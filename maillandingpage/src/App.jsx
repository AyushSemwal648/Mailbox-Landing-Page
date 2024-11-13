

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import Thakyou from './components/Thakyou';


function App() {
 

  return (

    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/thank-you" element={<Thakyou />} />
      </Routes>
    </Router>
  )
}

export default App
