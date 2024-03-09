var express = require('express')
var app = express()
var cors = require('cors')
var news = require('./router/new')
app.use(cors())
app.listen(5000)

app.use('/news',news)

app.get('/',function(req,res){
    res.send('api ok ')
})

