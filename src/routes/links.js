const {Router} = require("express");
const transporter = require("../config/mailer.js")

const router = Router();
router.post('/preregistro', async(req, res)=>{
  const {name, email, email2, numberTel} = req.body;
  if(email === email2){
    try {
          await transporter.sendMail({
          from: '"Se preregistró correctamente 👻" <jose.lizardo21.cont@gmail.com>', // sender address
          to: email, // list of receivers
          subject: "Hello ✔", // Subject line
          text: `Hola ${name}, ya te has preregistrado, muy pronto te contactaremos`, // plain text body
          html: `<h1>Hola ${name}, ya te has preregistrado, muy pronto te contactaremos</h1>`, // html body
        })
        res.send("El mensaje ha sido enviado correctamente");
    } catch (error) {
        res.send("Ha ocurrido algún error, intentelo más tarde")
    }
  }else{
    res.send("Los correos son diferentes");
  }
});

module.exports = router;
