const app = require('./src/app.js')

const dotenv = require('dotenv')
dotenv.config()

const connectDB = require('./src/db/db.js')
connectDB()

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})