import nodemailer from "nodemailer";

export async function sendMail(options: nodemailer.SendMailOptions) {
  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // la app password de 16 dígitos
      },
    });

    return await transporter.sendMail(options);
  } catch (err) {
    console.error("Error creando transporter o enviando mail:", err);
    throw err;
  }
}
