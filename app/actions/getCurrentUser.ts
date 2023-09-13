import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/lib/prismadb";
import { error } from "console";
import { toast } from "react-hot-toast";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return toast.error("Error in fetching current user ");
    }
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });
    if (!currentUser) {
      return toast.error("Error in fetching current user ");
    }
    return {
      ...currentUser,
      createdAt: currentUser?.createdAt.toISOString(),
      updatedAt: currentUser?.updatedAt.toISOString(),
      emailVerified: currentUser?.emailVerified?.toISOString() || null,
    };
  } catch (errors: any) {
    return toast.error("current user session not found");
  }
}
