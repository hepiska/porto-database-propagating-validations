var express = require('express');
var router = express.Router();
var eventControl=require('../controllers/events');
//console.log('masuk');

router.post('/event',eventControl.insert)
router.get('/event',eventControl.views)
module.exports = router
