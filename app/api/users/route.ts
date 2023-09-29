import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
// todo: find out how to use single prisma instance eg. from lib/prisma instead
const prisma = new PrismaClient();

export async function GET(request: Request) {
  const allUsers = await prisma.user.findMany();

  return NextResponse.json({ data: allUsers });
}

export async function POST(request: Request) {
  const body = await request.json();

  const uName = body?.uName || "";
  const uEmail = body?.uEmail || "";
  const uAvatar = body?.uAvatar || "";

  const newUser = await prisma.user.create({
    data: { name: uName, email: uEmail, image: uAvatar },
  });

  return NextResponse.json({ data: newUser });
}
