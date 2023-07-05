import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Game from './components/pages/Game'
import Home from './components/pages/Home'
import Series from './components/pages/Series'

function App() {

  return (
    <div className='app'>
      
      <Navbar/>
      <Home/>
      <Game/>
      <Series/>
      <Footer/>
    </div>
  )
}

export default App
