import dbConnect from "@/lib/prisma/dbconn";
import puppeteer from "puppeteer";
import { Reports } from "../models";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function Handler(request: NextApiRequest) {
  try {
    await dbConnect();
  } catch (e: any) {}
}
