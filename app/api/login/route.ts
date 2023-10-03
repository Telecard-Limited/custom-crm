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
    // If both email and password are valid, return success along with the username
    return NextResponse.json({
      message: "Login successful",
      statusCode: 200,
      username: user?.name, // Include the username in the response
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      message: "Internal Server Error",
      statusCode: 500, // Internal Server Error
    });
  }
}
