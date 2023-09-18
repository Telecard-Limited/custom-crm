import { NextResponse } from "next/server";
import prisma from "@/lib/prisma/prsma";
import { NextApiRequest } from "next";
import bcrypt from "bcrypt";
export async function GET(request: NextApiRequest) {
  try {
    await prisma.$connect();

    const { email } = request.body;
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.error();
    }

    return NextResponse.json(user);
  } catch (error) {
    await prisma.$disconnect();
    console.error("Error fetching user:", error);
    return NextResponse.error();
  }
}

export async function POST(request: NextApiRequest) {
  try {
    await prisma.$connect();
    //@ts-ignore
    const { email, name, password, phoneNumber, country } = request.body;
    console.log(request.body);

    // const hashedPassword = await bcrypt.hash(password, 12);

    // Create and save the user
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
        isActive: false,
        phoneNumber,
        country,
      },
    });

    return NextResponse.json(user);
  } catch (err) {
    await prisma.$disconnect();
    console.error(err);
    return NextResponse.json({
      message: "Error creating user",
      success: false,
    });
  }
}
