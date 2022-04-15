require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = require('twilio')(accountSid, authToken);


const sendSMS = (text) =>{
    twilio.messages 
    .create({ 
       body: text,  
       messagingServiceSid: process.env.MESSAGING_SERVICE_SID,      
       to: `+91${process.env.RECEIVER_PHONE}` 
     }) 
    .then(message => console.log(message)) 
    .done();
}


module.exports = {sendSMS}