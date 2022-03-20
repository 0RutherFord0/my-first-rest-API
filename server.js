require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://doadmin:W032Z4R957QCD6By@adityatawade-6d6d5c14.mongo.ondigitalocean.com/subscribers?authSource=admin&replicaSet=adityatawade&tls=true&tlsCAFile=./ca-certificate', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
    tlsCAFile: "./ca-certificate.crt"
});
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('Server Started'))