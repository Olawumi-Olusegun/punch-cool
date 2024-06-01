
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/navbar'
import Home from './pages/home'

function App() {

  return (
    <div className='h-screen'>
      <Navbar />
      <main className='flex flex-col h-full'>
        <Home />
        <Footer />
      </main>
    </div>
  )
}

export default App
