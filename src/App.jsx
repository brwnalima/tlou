import './App.css'
import Navbar from './components/navbar/Navbar'
import Game from './components/pages/Game'
import Home from './components/pages/Home'

function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <Game/>
    </div>
  )
}

export default App
