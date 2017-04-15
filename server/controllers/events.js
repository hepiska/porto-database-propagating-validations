let Event1 = require('../models/events')

module.exports = {
  insert:function(req,res){
    //console.log('masuk');
    Event1.create({
       date:req.body.date,
       email:req.body.email,
       title:req.body.title,
       name:req.body.email
    },function(err,data){
       if (err) {
         res.send(err);
       } else {
         res.send(data);
       }
    })
  },
  views:function(req,res){
    //console.log('masuk');
    Event1.find({
    },function(err,data){
       if (err) {
         res.send(err);
       } else {
         //console.log(data);
         res.send(data);
       }
    })
  }

}
