import React from 'react'


const WorkoutDetails = (props) => {
  const handleClick = async ()=>{
    try {
      const response = await fetch(`http://localhost:4000/api/workouts/${props.workout._id}`, {
        method: 'DELETE'
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(`Element with _id ${props.workout._id} deleted successfully.`);
        window.location.reload();
        return data;
      } else {
        console.error(`Error deleting element with _id ${props.workout._id}.`);
        return null;
      }
    } catch (error) {
      console.error(`Error deleting element with _id ${props.workout._id}.`, error);
      return null;
    }
  }
  return (
    <div className='workout-details'>
        <h4>{props.workout.title}</h4>
        <p><strong>Load (kg):</strong> {props.workout.load}</p>
        <p><strong>Reps (kg):</strong> {props.workout.reps}</p>
        <p>{props.workout.createdAt}</p>
        <span onClick={handleClick}>Delete</span>
    </div>
  )
}

export default WorkoutDetails