const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 3001

//Routes
const workSpaceRoutes = require('./app/routes/workspace')
const userRoutes = require('./app/routes/user')
const boardRoutes = require('./app/routes/board')

//Middleware to parse json in the request body 
app.use(express.json())
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })) 

const corsOptions ={
    origin:'http://localhost:3000',
}
app.use(cors(corsOptions))

app.use('/workspace', workSpaceRoutes)
app.use('/user', userRoutes)
app.use('/board', boardRoutes)

app.listen(PORT, (req, res) => {
    console.log(`Server listening on ${PORT}`)
})