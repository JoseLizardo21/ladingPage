const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "jose.lizardo21.cont@gmail.com", // generated ethereal user
      pass: "ynejpspvfhwhuavd", // generated ethereal password
    },
  });
  transporter.verify(()=>{
    console.log("ready for send emails")
  })
  module.exports = transporter;