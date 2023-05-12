import { useEffect } from 'react'
import { useWorkoutsContext } from '../Hooks/useWorkoutsContext'

// Components 
import WorkoutCard from '../components/WorkDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workouts')
      const res = await response.json()

      if(response.ok){
        dispatch({type: 'SET_WORKOUTS', payload: res})
      }
    }

    fetchWorkouts();
  }, [dispatch])

  console.log(workouts)
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