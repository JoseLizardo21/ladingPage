if(process.env.NODE_ENV != 'production'){
  require('dotenv').config()
}
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "developer2.mass@gmail.com", // generated ethereal user
      pass: process.env.PASS_GMAIL, // generated ethereal password
    },
  });
  transporter.verify(()=>{
    console.log("ready for send emails")
  })
  module.exports = transporter;