import PropTypes from 'prop-types'
import Moment from 'moment';
import { TrashIcon } from '@heroicons/react/24/solid'
import { useWorkoutsContext } from '../Hooks/useWorkoutsContext';

const WorkDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()
  const { title, load, reps, createdAt } = workout
  // const now = new Date(createdAt);
  const formattedDate = Moment(createdAt).fromNow({withoutSuffix: true});

  const handleClick = async () => {
    const response = await fetch(`http://localhost:4000/api/workouts/${workout._id}`, {
      method: 'DELETE',
    })

    const res = await response.json()

    if(response.ok){
      dispatch({type: 'DELETE_WORKOUT', payload: res})
    }
  }
  return (
    <div>
      <div className='w-full lg:max-w-full flex justify-between rounded overflow-hidden shadow-lg mb-4 bg-white hover:cursor-pointer'>
        <div className='px-6 py-4'>
          <h4 className='font-bold text-xl mb-2 text-green-600'>{title}</h4>
          <p className='text-gray-700 text-base'><strong>Load in(KG): </strong>{load}</p>
          <p className='text-gray-700 text-base'><strong>Reps: </strong>{reps}</p>
          <p className='text-gray-800 text-xs'>{formattedDate}</p>
        </div>
        <span className='px-6 py-4'>
          <button onClick={handleClick} className='hover:bg-red-100 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline'>
          <TrashIcon className="h-6 w-6 text-red-600" />
          </button>
          
        </span>
      </div>
    </div>
  )
}

WorkDetails.propTypes = {
  workout: PropTypes.object.isRequired,
}

export default WorkDetails

