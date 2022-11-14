const {Router} = require("express");
const pool = require('../database');
const transporter = require("../config/mailer.js")

const router = Router();
router.post('/preregistro', async(req, res)=>{
  const {name, email, email2, numberTel} = req.body;
  const newUser = {
    username : name,
    email
  }
  if(email === email2){
    try {
        await pool.query('INSERT INTO usersPre set ?', [newUser]);
        await transporter.sendMail({
          from: '"Se preregistró correctamente 👻" <jose.lizardo21.cont@gmail.com>', // sender address
          to: email, // list of receivers
          subject: "Hello ✔", // Subject line
          text: `Hola ${name}, ya te has preregistrado, muy pronto te contactaremos`, // plain text body
          html: `<h1>Hola ${name}, ya te has preregistrado, muy pronto te contactaremos</h1>`, // html body
        })
        res.send("Usted ha sido pregistrado correctamente");
    } catch (error) {
        res.send("Ha ocurrido algún error, intentelo más tarde")
    }
  }else{
    res.send("Los correos son diferentes");
  }
});

module.exports = router;
