// Load the SDK
var AWS = require('aws-sdk');

const dotenv = require('dotenv');
dotenv.config();


// aws config 
const AWSParameters = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION,
    }


const config = new AWS.Config(AWSParameters) 
AWS.config.update(AWSParameters);

module.exports =  AWS;