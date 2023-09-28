import dbConnect from "@/lib/prisma/dbconn";
import { Forms, User } from "../models";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(request: NextApiRequest) {
  try {
    await dbConnect();

    //Form creation backend
    let passedValue = await new Response(request.body).text();

    const requestData = JSON.parse(passedValue);
    console.log({ requestData });
    console.log(request.body);

    const { title, fields, userId } = requestData;

    if (!title || !fields || !userId) {
      return NextResponse.json({
        message: "Invalid request",
        statusCode: 400,
      });
    }

    // Ensure that 'fields' is an array of objects
    if (
      !Array.isArray(fields) ||
      !fields.every((field) => typeof field === "object")
    ) {
      return NextResponse.json({
        message: "Invalid 'fields' attribute, it should be an array of objects",
        statusCode: 400,
      });
    }

    // Now you can work with the 'fields' array
    for (const field of fields) {
      console.log("Field label:", field.label);
      console.log("Field type:", field.type);
      // You can handle each field object as needed
    }

    const newForm = new Forms(requestData);
    const savedForm = await newForm.save();

    const user = await User.findById(userId); // Find the user by ID
    if (!user) {
      return NextResponse.json({ error: "User not found" });
    }

    return NextResponse.json(savedForm);
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({
      message: "Internal Server Error",
      statusCode: 500,
    });
  }
}

export async function GET() {
  try {
    await dbConnect();

    // Assuming Forms has a 'createdBy' field, populate it
    const forms = await Forms.findOne({}).populate("createdBy");

    if (!forms) {
      return NextResponse.json({ message: "No forms found", statusCode: 404 });
    }

    return NextResponse.json({
      message: { forms },
      statusCode: 200,
    });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({
      message: "Internal Server Error",
      statusCode: 500,
    });
  }
}
