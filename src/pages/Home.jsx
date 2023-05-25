import { useEffect } from 'react'
import { useWorkoutsContext } from '../Hooks/useWorkoutsContext'
import { useAuthContext } from '../Hooks/useAuthContext'
// Components 
import WorkoutCard from '../components/WorkDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workouts',{
        headers:{
          'Authorization': `Bearer ${user.token}`
        },
      })
      const res = await response.json()

      if(response.ok){
        dispatch({type: 'SET_WORKOUTS', payload: res})
      }
    }

    if(user){
    fetchWorkouts();
  }
  }, [dispatch])

  return (
    <>
    <div className='w-full max-w-4xl  mx-auto mt-5 sm:grid grid-cols-3 gap-6'>
    <div className="col-span-2">
      {workouts && workouts.map((workout) => (
        <WorkoutCard key={workout._id} workout={workout}/>
      ))}
    </div>
        <WorkoutForm/>
    </div>
    </>
  )
}

export default Home