import './App.css'
import Navbar from './components/navbar/Navbar'
import About from './components/pages/About'
import Home from './components/pages/Home'

function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <About/>
    </div>
  )
}

export default App
