const express = require("express")
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workouts")
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json())


app.use('/api/workouts',workoutRoutes)

const dbURL = "mongodb+srv://elghe:TO0JD4FiCxByfGZu@cluster0.vj32cse.mongodb.net/workouts?retryWrites=true&w=majority"

const connectParam = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(dbURL, connectParam).then(()=>{
    console.info("Connected!")
}).catch((e)=>{
    console.log('error')
})


app.listen(4000, ()=>{

})

