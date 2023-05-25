import { useState } from "react"
import { useSignup } from "../Hooks/useSignup"

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, error, loading } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }
  return (
    <div className="flex justify-center items-center ">
      <form className='flex flex-col bg-white text-gray-700 text-base rounded overflow-hidden shadow-lg m-10 py-8 px-10 md:w-[23%]' onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl mb-3 text-gray-900">SignUp</h1>
        {error && <p className="text-red-700 bg-red-100 border border-red-200 py-3 text-center text-xl mt-3 mb-3">{error}</p>}
        <label className="text-xl mb-3 text-gray-700" htmlFor='email'>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-3  border border-solid shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-outline focus:shadow-outline"
          id='email'
        />
        <label className="text-xl mb-3 text-gray-700" htmlFor='password'>Password</label>        
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-3 border border-solid shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id='password'
        />
        <button className="px-2 py-3 rounded-xl text-xl text-white bg-blue-600" disabled={loading}>SignUp</button>
        
      </form>
    </div> 
  )
}

export default SignUp