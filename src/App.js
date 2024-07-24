
import './App.css';
import { Navbar } from './components/Navbarsection'
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

const navItem = document.getElementById("navItem")
function navbtn() {
  navItem.style.top = "14rem"
}

export default App;
