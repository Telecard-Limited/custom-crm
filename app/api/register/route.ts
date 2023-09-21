import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { NextApiRequest } from "next/types";
import dbConnect from "@/lib/prisma/dbconn";
import { User } from "../models";

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
    const userAvailable = await User?.find({ email });
    if (userAvailable.length > 0) {
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
