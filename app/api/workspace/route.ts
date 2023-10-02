import dbConnect from "@/lib/prisma/dbconn";
import { WorkSpace, User } from "../models";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(request: NextApiRequest) {
  try {
    await dbConnect();

    //workspace creation backend
    let passedValue = await new Response(request.body).text();

    const requestData = JSON.parse(passedValue);
    console.log({ requestData });
    console.log(request.body);
    const { workspaceName, userId } = requestData;
    if (!workspaceName || !userId) {
      return NextResponse.json({
        message: "Invalid request",
        statusCode: 400,
      });
    }
    const workspace = new WorkSpace(requestData);
    await workspace.save();
    return NextResponse.json({
      message: "workspace created",
      statusCode: "200",
    });
  } catch (e: any) {
    return NextResponse.json({
      message: "Internal Server Error",
      statusCode: "500",
    });
  }
}
