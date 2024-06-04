
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/navbar'
import Home from './pages/home'

function App() {

  return (
    <div className='min-h-screen relative'>
      <Navbar />
      <main className='flex flex-col h-full'>
        <Home />
        <Footer />
      </main>
    </div>
  )
}

export default App
