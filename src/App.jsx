import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import Events from './pages/Events'
import Schedule from './pages/Schedule'
import Contact from './pages/Contact'
import Search from './pages/Search';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/events' element={<Events />}/>
          <Route path='/search' element={<Search />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/contactus' element={<Contact />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
