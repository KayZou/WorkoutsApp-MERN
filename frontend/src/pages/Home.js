import React from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForum from '../components/WorkoutForm'
import { useEffect, useState } from 'react'


const Home = () => {
  const [workouts, setWorkouts] = useState(null)
  
  useEffect(()=>{
    const fetchWorkouts = async ()=>{
      const res =  await fetch("http://localhost:4000/api/workouts/")
      const json = await res.json()

      if(res.ok){setWorkouts(json)}
    }
    fetchWorkouts()
  }, [])
  return (
    <div className='home'>
      <div className='workouts'>
        {workouts && workouts.map((workout)=>{
          return<WorkoutDetails key={workout._id} workout={workout}/>
        })}
      </div>
      <WorkoutForum/>
    </div>
  )
}

export default Home