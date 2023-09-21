import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { NextApiRequest } from "next/types";
import dbConnect from "@/lib/prisma/dbconn";
import { User } from "../models";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
export async function POST(request: NextApiRequest) {
  try {
    await dbConnect();
    console.log("Connected to MongoDB");
    let passedValue = await new Response(request.body).text();

    const requestData = JSON.parse(passedValue);
    console.log({ requestData });
    console.log(request.body);

    // Extract data from the parsed JSON
    const { email, name, password, phoneNumber, country } = requestData;

    // Check if email already exists
    const userAvailable = await User?.findOne({ email });
    console.log("ffffQAffffffff", userAvailable);
    if (userAvailable) {
      const transporter = nodemailer.createTransport({
        host: "203.130.2.136",
        port: 25,
        auth: {
          user: process.env.SERVERMAILER || "esg_feet@telecard.com.pk",
          pass: process.env.SERVERPASSWORD || "AccessLHE12",
        },
      });

      const mailOptions = {
        from: process.env.SERVERMAILER,
        to: email,
        subject: "Welcome ",
        html: `<p>Subject : </p><p>From : ${process.env.SERVERMAILER}</p><p>Name : ${name}</p><p> Message : ${requestData?.data}</p>`,
      };
      // send mail with defined transport object
      await transporter.sendMail(mailOptions, function (error) {
        if (error) {
          return NextResponse.json({
            message: "Something went wrong",
            errors: error,
            statusCode: 500,
          });
        } else {
          return NextResponse.json({
            message: `Email sent to ${email}`,
            statusCode: 200,
          });
        }
      });

      return NextResponse.json({
        message: "email must be unique",
        statusCode: 409,
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create and save the user
    const user = await User?.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      country,
    });

    if (!user) {
      return NextResponse.json({
        message: "Error creating user",
        statusCode: 500, // Internal Server Error
      });
    }
    await user.save();

    return NextResponse.json(user);
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      message: "Internal Server Error",
      statusCode: 500, // Internal Server Error
    });
  }
}
