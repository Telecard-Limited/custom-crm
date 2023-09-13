import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/lib/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password, phoneNumber, country } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
      isActive: false,
      phoneNumber,
      country,
    },
  });

  return NextResponse.json(user);
}
