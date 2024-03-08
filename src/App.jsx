import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import Events from './pages/Events'
import Schedule from './pages/Schedule'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/events' element={<Events />}/>
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/contactus' element={<Contact />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
