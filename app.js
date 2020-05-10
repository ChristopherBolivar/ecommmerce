const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config()

//import routes
const userRoutes = require('./routes/user')

//app
const app = express()
//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
}).then(()=>{
    console.log("DB connected")
})

//routes middleware
app.use(userRoutes)

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`You are running on port: ${port}`)
})