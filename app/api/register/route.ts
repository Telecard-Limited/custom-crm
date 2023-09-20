import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { NextApiRequest } from "next/types";
import dbConnect from "@/lib/prisma/dbconn";
import { User } from "../models";

export async function POST(request: NextApiRequest) {
  try {
    await dbConnect();
    console.log("Connected to MongoDB");
    const { email, name, password, phoneNumber, country } = request.body;

    // Check if any required field is missing
    if (!name || !email || !password || !phoneNumber || !country) {
      return NextResponse.json({
        message: "All fields are required",
        statusCode: 400, // Bad Request
      });
    }

    // Check if email already exists
    const userAvailable = await User?.find({ email });
    if (userAvailable) {
      return NextResponse.json({
        message: "Email already exists",
        statusCode: 409, // Conflict
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

    return NextResponse.json(user);
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      message: "Error creating user",
      statusCode: 500, // Internal Server Error
    });
  }
}
