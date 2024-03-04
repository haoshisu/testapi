var express = require('express')
var app = express()
var news = require('./router/new')

app.listen(3000)

app.use('/news',news)

app.get('/',function(req,res){
    res.send('api ok ')
})

