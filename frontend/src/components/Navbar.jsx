import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <header className=" bg-white w-full px-4 py-3 flex justify-center">
      <nav className="max-w-4xl w-full flex items-center py-3 hover:text-gray-400">
        <ul>
          <li>
            <NavLink to="/" className="text-2xl">WorkoutBuddy</NavLink>
          </li>
        </ul>
      </nav>
    </header>

    </>
  )
}

export default Navbar