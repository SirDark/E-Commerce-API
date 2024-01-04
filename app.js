//middleware imports
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
//db imports
const connectDB = require('./db/connect')
//routers
const authRouter = require('./routes/authRoutes')
// rest of the package
const express = require('express')
require('dotenv').config()
require('express-async-errors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

//express
const app = express()

//middlewares
app.use(morgan('tiny'))
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET))

//routes
app.use('/api/v1/auth' , authRouter)

//error handling
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