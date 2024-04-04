
import './App.css';
import {Navbar} from './components/Navbarsection'
import About from './components/About'
import Home from './components/Home';
import Skill from './components/Skill';
function App() {
  return (
   <>
   <Navbar></Navbar>
  <Home/>
  <About/>
  <Skill/>
   </>
  )
}

export default App;
