const {Router} = require("express");
const pool = require('../database');
const transporter = require("../config/mailer.js")

const router = Router();

router.get('/', (req, res)=>{
  res.render('index');
});
router.get('/n', (req,res)=>{
  res.render('prueba');
});

router.post('/preregistro', async(req, res)=>{
  const {name, email, email2, numberTel} = req.body;
  const newUser = {
    username : name,
    email,
    numberTel: numberTel.replace(/\s+/g, '')
  }
  if(email === email2){
    const row = await pool.query("SELECT * FROM usersPre where email = ?", [email]);
    if(row.length > 0){
      req.flash('MesCorreoRe', 'El gmail ya ha sido resgistrado anteriormente');
      res.redirect('/#contFormSignIn');
    }else{
      const row2 = await pool.query("SELECT * FROM usersPre where numberTel = ?", [newUser.numberTel]);
      if(row2.length > 0){
        req.flash('MesCorreoRe', 'El número ya ha sido  registrado anteriormente');
        res.redirect('/#contFormSignIn');
      }else{
        if(newUser.numberTel.length == 9 && newUser.numberTel[0] == 9){
          try {
              await pool.query('INSERT INTO usersPre set ?', [newUser]);
              await transporter.sendMail({
                from: '"Se preregistró correctamente 👻" <jose.lizardo21.cont@gmail.com>', // sender address
                to: email, // list of receivers
                subject: "Hello ✔", // Subject line
                text: `Hola ${name}, ya te has preregistrado, muy pronto te contactaremos`, // plain text body
                html: `<img src="cid:prueba">`, 
                // html body
                attachments: [
                  {
                  filename: 'MessageGmail.png',
                  path: __dirname + '/MessageGmail.png',
                  cid: 'prueba'
             },
            ]
              })
              req.flash('Success', 'Se preregistró correctamente');
              res.redirect('/#contFormSignIn');
          } catch (error) {
              req.flash('MesCorreoRe', 'Ha ocurrido algún error, intentalo más tarde');
              res.redirect('/#contFormSignIn');
          }
        }else{
          req.flash('MesCorreoRe', 'El número de telefono no es válido');
          res.redirect('/#contFormSignIn');
        }
      }
    }
  }else{
    req.flash('MesCorreoRe', 'Los correos son diferentes');
    res.redirect('/#contFormSignIn');
  }
});

module.exports = router;
