import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { NextApiRequest } from "next/types";
import dbConnect from "@/lib/prisma/dbconn";
import { User } from "../models";
import jwt from "jsonwebtoken";
export async function POST(request: NextApiRequest) {
  try {
    await dbConnect();
    console.log("Connected to MongoDB");
    let passedValue = await new Response(request.body).text();

    const requestData = JSON.parse(passedValue);
    console.log({ requestData });
    console.log(request.body);

    // Extract data from the parsed JSON
    const { email, password } = requestData;
    const user = await User?.findOne({ email });

    if (!user) {
      return NextResponse.json({
        message: "Invalid credentials",
        statusCode: "401",
      });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({ message: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "secrert",
      {
        expiresIn: "1h", // Token expires in 1 hour (adjust as needed)
      }
    );
    // Check if email already exists

    // Hash the password

    // Create and save the user

    if (!user) {
      return NextResponse.json({
        message: "Error creating user",
        statusCode: 500, // Internal Server Error
      });
    }

    return NextResponse.json(user);
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      message: "Internal Server Error",
      statusCode: 500, // Internal Server Error
    });
  }
}
