import sendEmail from "../mailer/nodemailer.js";

export const parseEmailForm = (req, res) => {
  try {
    res.status(200).send("Data received!");
    sendEmail(req.body);
  } catch (err) {
    res.status(400).send(err);
  }
};
