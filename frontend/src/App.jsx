import { BrowserRouter, Routes, Route} from 'react-router-dom'

// Components and Pages
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
