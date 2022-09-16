var express = require('express');
var router = express.Router();

var AWS = require('../utils/aws')
var errorHandling = require('../utils/apierror')

router.post('/classify', function(req, res, next) {

const params = {
    Image: {
      'Bytes':req.files.file.data
    },
    MaxLabels: 20
  }



const client = new AWS.Rekognition();


client.detectLabels(params, function(err, response) {
  let jsonResponse = {}
  let statusCode = 200
  if (err) {
    jsonResponse['error'] = errorHandling.UNABLE_TO_PROCESS_THE_REQUEST
    statusCode =  400
   } 
   else{
   jsonResponse['labels'] = response.Labels.map(item => item.Name)
   }

  res.status(statusCode).json(jsonResponse);
    
  });

});

module.exports = router;
