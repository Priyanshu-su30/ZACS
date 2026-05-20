import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      username,
      name,
      email,
      password,
    } = body;

    // Validate fields
    if (
      !username ||
      !name ||
      !email ||
      !password
    ) {
      return NextResponse.json(
        {
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    // Check existing email
    const existingEmail =
      await prisma.user.findUnique({
        where: {
          email,
        },
      });

    if (existingEmail) {
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        { status: 400 }
      );
    }

    // Check existing username
    const existingUsername =
      await prisma.user.findUnique({
        where: {
          username,
        },
      });

    if (existingUsername) {
      return NextResponse.json(
        {
          message: "Username already taken",
        },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        username,
        name,
        email,
        passwords: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        user,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}