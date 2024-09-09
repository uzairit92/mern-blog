import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/about" element={ <About/> } />
    <Route path="/sign-in" element={ <Signin/> } />
    <Route path="/sign-up" element={ <SignUp/> } />
    <Route path="/dashboard" element={ <Dashboard/> } />
    <Route path="/projects" element={ <Projects/> } />

    </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App
