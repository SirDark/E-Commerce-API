// imports
require('dotenv').config()
require('express-async-errors')
const morgan = require('morgan')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const express = require('express')
const connectDB = require('./db/connect')

//express
const app = express()

//middlewares
app.use(morgan('tiny'))
app.use(express.json())

//routes
app.get('/', (req,res)=> {
    res.send('hi')
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))

    } catch (error) {
        console.log(error);
    }
}

start()