import React, { useState } from 'react'


const WorkoutForm = () => {
  
    const [title, setTitle] = useState("")
    const [load, setLoad] = useState()
    const [reps, setReps] = useState()
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        //e.preventDefault();
        const workout = { title, load, reps };
        try {
          const response = await fetch("http://localhost:4000/api/workouts/", {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          if (response.ok) {
            const json = await response.json();
            setError(null);
            setTitle("");
            setReps(0);
            setLoad(0);
            console.log("New workout added:", json);
          } else {
            throw new Error('Network response was not ok');
          }
        } catch (error) {
          console.error('Error occurred while sending the request:', error);
          setError('Error occurred while sending the request: Network response was not ok');
        }
      };
      
      
      
  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>add a new workout</h3>
        <label>Exercise Title:</label>
        <input type="text" value={title} onChange={(e)=>{
            setTitle(e.target.value)
        }}/>
        <label>Exercise Load:</label>
        <input type="number" value={load} onChange={(e)=>{
            setLoad(e.target.value)
        }}/>
        <label>Exercise Reps:</label>
        <input type="number" value={reps} onChange={(e)=>{
            setReps(e.target.value)
        }}/>
        <button>Add Workout!</button>
        {error&& <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm