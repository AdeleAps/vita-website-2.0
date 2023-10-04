const nodemailer = require('nodemailer');

export default function handler(req, res) {

  const message = {
    from: "Question mark?",
    to: process.env.NODEMAILER_EMAIL,
    subject: "E-pasta pieteikums konsultācijai",
    text: "ha",
    html: `<p>"ha"</p>`,
  };

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  if (req.method === 'POST') {
    transporter.sendMail(message, (err, info) => {

      if (err) {
        res.status(404).json({
            error: `Connection refused at ${err.address}`
        });
      } else {
        res.status(250).json({
            success: `Message delivered to ${info.accepted}`
        });
      }
    });
  }
}