const nodemailer = require("nodemailer");

export default function handler(req, res) {
  const emojiOptions = [
    "❤️",
    "💖",
    "🍄",
    "🦀",
    "🌞",
    "🌺",
    "🌟",
    "🐹",
    "🐸",
    "😻",
    "🦆",
    "💕",
    "😻",
    "🐈",
  ];
  const emoji =
    emojiOptions[Math.floor(Math.random() * (emojiOptions.length - 1))];

  const formattedEmailBody = `Mājaslapā ienācis jauns pieteikums konsultācijai! ${emoji}  Vārds: ${req.body.firstName} Uzvārds: ${req.body.lastName} E-pasta adrese: ${req.body.email} Apraksts: ${req.body.description}`;
  const formattedEmailBodyHTML = `<div style="font-size: 17px; font-family: Times New Roman"><p style="font-size: 14px; color:#504F4F; ">Mājaslapā ienācis jauns pieteikums konsultācijai! ${emoji}</p> <p><strong>Vārds</strong>: ${req.body.firstName} </pr> <p><strong>Uzvārds</strong>: ${req.body.lastName} </p><p>  <strong>E-pasta adrese</strong>: ${req.body.email} </p><p>  <strong>Apraksts</strong>: ${req.body.description}</p></div>`;

  const message = {
    from: process.env.NODEMAILER_SENDER_EMAIL,
    to: process.env.NODEMAILER_RECEIVER_EMAIL,
    subject: `Jauns pieteikums konsultācijai`,
    text: formattedEmailBody,
    html: formattedEmailBodyHTML,
  };

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  if (req.method === "POST") {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        res.status(404).json({
          error: `Connection refused at ${err.address}`,
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}
