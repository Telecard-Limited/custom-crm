import { NextApiRequest } from "next/types";
import dbConnect from "@/lib/prisma/dbconn";
import { User } from "../models";
import { NextResponse } from "next/server";
import { Email } from "../models";
import nodemailer from "nodemailer";
export async function POST(request: NextApiRequest) {
  try {
    await dbConnect();
    console.log("db connected");
    const { email } = request.body;
    const isUserEmail = await User.find({ email: email });
    if (isUserEmail) {
      let transport = await nodemailer.createTransport({
        host: "203.130.2.136",
        port: 25,
        secure: false,
        auth: {
          user: process.env.esg_feet,
          pass: process.env.AccessLHE12,
        },
        tls: { rejectUnauthorized: false },
        requireTLS: true,
        debug: true,
        logger: true, // log to console
      });
      const mailOptions = {
        from: `${process.env.SERVERMAIL}`,
        to: request.body.email,
        subject: request.body.subject,
        html: `<p>Subject : ${request.body.subject}</p><p>From : ${request.body.email}</p><p>Name : ${request.body.name}</p><p> Message : ${request.body.body}</p>`,
      };
    }
  } catch (e) {}
}
