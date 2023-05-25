import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './Hooks/useAuthContext'
// Components and Pages
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const App = () => {
  const { user } = useAuthContext()
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ user ? <Home /> : <Navigate to='login'/>} />
        </Routes>
        <Routes>
          <Route path="/login" element={!user ? <Login /> : <Navigate to ='/'/>} />
        </Routes>
        <Routes>
          <Route path="/signup" element={!user ? <SignUp/> : <Navigate to='/'/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
