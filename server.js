require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
    tlsCAFile: "./ca-certificate.crt"
});
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to MonogoDB Database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/database', subscribersRouter)

app.listen(3000, () => console.log('Server Started'))