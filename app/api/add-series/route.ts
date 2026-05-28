// import { NextResponse } from "next/server";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import {prisma} from "@/lib/prisma";

// export async function POST(req: Request) {
//   try {
//     const session = await getServerSession(authOptions);
    
//     if (!session?.user?.email) {
//       return NextResponse.json(
//         { message: "Unauthorized" },
//         { status: 401 }
//       );
//     }

//     const body = await req.json();
//     const { series } = body;

//     if (!series) {
//       return NextResponse.json(
//         { message: "Series required" },
//         { status: 400 }
//       );
//     }

//     // get current user
//     const user = await prisma.user.findUnique({
//       where: {
//         email: session.user.email,
//       },
//     });

//     if (!user) {
//       return NextResponse.json(
//         { message: "User not found" },
//         { status: 404 }
//       );
//     }

//     // prevent duplicates
//     if (user.series.includes(series)) {
//       return NextResponse.json({
//         message: "Series already added",
//       });
//     }

//     // update series array
//     await prisma.user.update({
//       where: {
//         email: session.user.email,
//       },
//       data: {
//         series: {
//           push: series,
//         },
//       },
//     });

//     return NextResponse.json({
//       message: "Series added successfully",
//       success: true,
//       body,
//     });
//   } catch (error) {
//     console.log(error);

//     return NextResponse.json(
//       { message: "Server error" },
//       { status: 500 }
//     );
//   }
// }

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const session = await getServerSession();

    if (!session?.user?.email) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user) {
      return Response.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const savedSeries = await prisma.series.create({
      data: {
        tvmazeId: body.id,
        name: body.name,
        image: body.image,
        genres: body.genres,
        rating: body.rating,
        premiered: body.premiered,
        userId: user.id,
      },
    });

    return Response.json(savedSeries);
  } catch (error) {
    console.log(error);

    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}