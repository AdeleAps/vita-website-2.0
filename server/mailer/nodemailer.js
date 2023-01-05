import nodemailer from "nodemailer";

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
];
const emoji =
  emojiOptions[Math.floor(Math.random() * (emojiOptions.length - 1))];

const sendEmail = (emailBody) => {
  const formattedEmailBody = `Mājaslapā ienācis jauns pieteikums konsultācijai! ${emoji}  Vārds: ${emailBody.firstName} Uzvārds: ${emailBody.lastName} E-pasta adrese: ${emailBody.email} Apraksts: ${emailBody.description}`;
  const formattedEmailBodyHTML = `<div style="font-size: 17px; font-family: Times New Roman"><p style="font-size: 14px; color:#504F4F; "><i>Mājaslapā ienācis jauns pieteikums konsultācijai! ${emoji}</i></p> <p><strong>Vārds</strong>: ${emailBody.firstName} </pr> <p><strong>Uzvārds</strong>: ${emailBody.lastName} </p><p>  <strong>E-pasta adrese</strong>: ${emailBody.email} </p><p>  <strong>Apraksts</strong>: ${emailBody.description}</p></div>`;

  let transporter = nodemailer.createTransport({
    service: process.env.MAILER_SERVICE,
    auth: {
      user: process.env.MAILER_USERNAME,
      pass: process.env.MAILER_PASSWORD,
    },
  });

  return transporter.sendMail(
    {
      from: `Mājaslapas serveris <noreply.${process.env.MAILER_USERNAME}>`,
      to: process.env.MAILER_RECIPIENT,
      subject: "Jauns pieteikums konsultācijai",
      text: formattedEmailBody,
      html: formattedEmailBodyHTML,
    },
    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent!" + data);
      }
    }
  );
};

export default sendEmail;
