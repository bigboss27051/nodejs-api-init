var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var cors = require('cors') // set cors origin for call api with browser

const port = process.env.PORT || 7700 //set port for run api
var app = express()
app.use(bodyParser.json({ limit: '50mb' })) // set limit for send data or image
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }))
app.use(cookieParser())
app.use(cors()) // using cors

require('./routes/auth')(app) // setup route from auth 


// listening application
app.listen(port, function (err) {
  if (err) {
    return console.log(err)
  }
  console.log(`Express is running on port ${port}`)
})