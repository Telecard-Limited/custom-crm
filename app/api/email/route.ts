import prisma from "@/lib/prisma/prsma";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer"; // Import Nodemailer directly
import dotenv from "dotenv"; // Import dotenv directly

dotenv.config(); // Load environment variables from .env

// Define your custom authentication method
async function myCustomMethod(ctx: any) {
  let cmd = await ctx.sendCommand(
    +Buffer.from(
      "\u0000" +
        ctx.auth.credentials.user +
        "\u0000" +
        ctx.auth.credentials.pass,
      "utf-8"
    ).toString("base64")
  );

  if (cmd.status < 200 || cmd.status >= 300) {
    throw new Error("Failed to authenticate user: " + cmd.text);
  }
}

function generateVerificationToken() {
  return Math.random().toString(36).substr(2, 10);
}

const EmailVerificationhandler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const verificationToken = generateVerificationToken();

    await prisma.verificationToken.create({
      data: {
        token: verificationToken,
        userId: user.id,
      },
    });

    const { name, password } = user;

    const transporter = nodemailer.createTransport({
      host: "203.130.2.136",
      port: 8383,
      secure: false, // Change to false for non-secure SMTP
      auth: {
        type: "custom",
        method: "MY-CUSTOM-METHOD", // Use your custom handler
        user: "esg_feet",
        pass: "AccessLHE12",
      },
      customAuth: {
        "MY-CUSTOM-METHOD": myCustomMethod,
      },
    });

    // Save the email data using Prisma
    const email = await prisma.email.create({
      data: {
        subject: req.body.subject,
        fromEmail: req.body.email,
        fromName: req.body.name,
        message: req.body.body,
        user: { connect: { id: user.id } }, // Connect the email to the user
      },
    });

    const verificationLink = `http://localhost:3000verify?token=${verificationToken}`;
    const mailOptions = {
      from: "esg_feet@telecard.com.pk",
      to: req.body.email,
      subject: req.body.subject,
      html: `<p>Subject: ${req.body.subject}</p><p>From: ${req.body.email}</p><p>Name: ${req.body.name}</p><p>Message: ${req.body.body}</p><p>Verification Link: <a href="${verificationLink}">Click here to verify</a></p>`,
    };

    transporter.sendMail(mailOptions, function (error: any, info: any) {
      if (error) {
        console.error("Error sending email:", error);
        res
          .status(500)
          .json({ message: "Something went wrong", errors: error.message });
      } else {
        res.status(200).json({ message: "Email Sent to", email });
      }
    });
  } catch (error: any) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ message: "Something went wrong", errors: error.message });
  }
};

export default EmailVerificationhandler;
