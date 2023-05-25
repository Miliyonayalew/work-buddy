import { NavLink } from "react-router-dom"
import { useLogout } from "../Hooks/useLogout"
import { useAuthContext } from '../Hooks/useAuthContext'

const Navbar = () => {
  const { Logout } = useLogout()
  const { user } = useAuthContext()

  const handleLogout = () => {
    Logout()
  }
  return (
    <>
    <header className=" bg-white w-full px-4 py-3 flex justify-center">
      <nav className="max-w-4xl w-full flex items-center justify-between py-3">
        <ul>
          <li>
            <NavLink to="/" className="text-2xl  hover:text-gray-400">WorkoutBuddy</NavLink>
          </li>
        </ul>
        <ul className="ml-3 gap-5 flex justify-between items-center">
          {!user && (
            <ul className="ml-3 gap-5 flex justify-between items-center">
              <li>
                <NavLink to="/login" className="text-xl  hover:text-gray-400">Login</NavLink>
              </li>
              <li>
                <NavLink to="/signup" className="text-xl  hover:text-gray-400">SignUp</NavLink>
              </li>
            </ul>
          )}
          {user && (
            <div className="flex gap-3">
              <p className="text-center text-cyan-500     ">Welcome: {user.email}</p>
              <button className="text-center text-cyan-500 rounded p-1 outline outline-cyan-500  outline-offset-2" onClick={handleLogout}>Logout</button>
            </div>
            
          )}
        
        </ul>
      </nav>
    </header>

    </>
  )
}

export default Navbar