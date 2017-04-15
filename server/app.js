var express = require('express');
var bodyParser=require('body-parser');
var mongoose= require('mongoose');
var cors = require('cors');
var event1=require('./routers/events')
mongoose.connect('mongodb://localhost/event', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database connected!');
  }
});
let app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/api',event1);


app.listen(3000);
