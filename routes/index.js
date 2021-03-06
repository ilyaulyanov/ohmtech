var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */

var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    // clientId: '788987927542-4m6ib8favk4fb68sed3rabom3clj5s9v.apps.googleusercontent.com',
    // clientSecret: 'jVyq-ihAkGkgN3DrL3BWQ2Al',
    auth: {
        user: 'ohmtechmailer@gmail.com',
        pass: 'Y*#A(j7P6PvNz-5#'
    }
};

var transporter = nodemailer.createTransport(smtpConfig);

router.get('/', function(req, res) {
  res.render('index/index', { title: 'Express' });
});

router.post('/contact-submit', function(req, res){
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"OhmTech Fire Protection LTD 👥" <ohmtechfire@gmail.com>', // sender address
        replyTo: req.body.email,
        to: req.body.email, // list of receivers
        subject: 'New Contact Form Submission', // Subject line
        text: '🐴', // plaintext body
        html: '<p><b>Email: </b> ' + req.body.email + '</p><p><b>Name: </b> ' + req.body.name + '</p><p><b>Company: </b>' + req.body.company + '</p><p><b>Message: </b>' + req.body.message + '</>' // html body
    };
        // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            return res.status(500).json({
                status: 'Fail'
            });
        }
        console.log('Message sent: ' + info.response);
        return res.json({
            status: 'ok'
        });
    });
})

module.exports = router;
