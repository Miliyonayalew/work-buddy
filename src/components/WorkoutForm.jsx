import { useState} from 'react'
import { useWorkoutsContext } from '../Hooks/useWorkoutsContext'
import { useAuthContext } from '../Hooks/useAuthContext'

const WorkoutForm = () => {
  const { user } = useAuthContext()
  const { dispatch } = useWorkoutsContext()
  const [title, setTitle] = useState('')
  const [load, setLoads] = useState('')
  const [reps, setReps] = useState('')
  const [status, setStatus] = useState('')
  const [error, setError] = useState([])
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!user){
      setStatus('You must be logged in to add a workout')
      return
    }

    const workouts = {title, load, reps}

    const response = await fetch('http://localhost:4000/api/workouts',{
      method: 'POST',
      body: JSON.stringify(workouts),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const res = await response.json()

    if(!response.ok){
      setStatus(res.error)
      setError(res.emptyFields)
    }

    if(response.ok){
      setTitle('')
      setLoads('')
      setReps('s')
      setMsg(res.message)
      setError([])
      dispatch({type: 'CREATE_WORKOUT', payload: res.workout})
    }
  }

  return (
    <div className='mx-3 flex flex-col gap-3'>
      <h1 className='text-2xl'>Add new Workout</h1>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <label htmlFor="title" className='text-gray-700 text-base mb-2'>Title</label>
        <input 
          type="text"
          placeholder='Workout Title'
          className={ `mb-3 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error.includes('title') ? 'border-2 border-rose-600' : 'border'}`} 
          onChange={(e) => setTitle(e.target.value)} 
          id="title" 
          value={title}
          name="title" 
        />
        <label htmlFor="loads" className='text-gray-700 text-base mb-2'>Loads kg</label>
        <input 
          type="number" 
          id="loads" 
          placeholder='Load in KG'
          className={ `mb-3 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error.includes('load') ? 'border-2 border-rose-600' : 'border'}`} 
          value={load}
          onChange={(e) => setLoads(e.target.value)} 
        />
        <label htmlFor="reps" className='text-gray-700 text-base mb-1'>Reps</label>
        <input
          type="number"
          id="reps"
          placeholder='Repitition'
          className={ `mb-3 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error.includes('reps') ? 'border-2 border-rose-600' : 'border'}`} 
          value={reps}
          onChange={(e) => setReps(e.target.value)} 
        />
        <button type="submit" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
        </button>
      </form>
      <div className={`${status || msg &&  'w-full flex justify-center items-center py-5 lg:max-w-full rounded  text-white overflow-hidden shadow-lg mb-4'} ${status ? 'bg-red-200 text-red-600' : 'bg-green-600' }`}>
        <p className={`${ status || msg && 'p-3'}`}>{status ? status : msg}</p>
      </div>
    </div>
  )
}

export default WorkoutForm