import prisma from "@/lib/prisma";
import { prismaConnect } from "@/utils/prismaConnect";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log(params.id);
  try {
    await prismaConnect();
    const applications = await prisma.application.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(applications, { status: 200 });
  } catch (error) {
    console.log("DELETE APPLICATION", error);
    return NextResponse.json({ message: "Cannot delete" }, { status: 500 });
  }
}