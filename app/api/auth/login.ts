// import type { NextApiRequest, NextApiResponse } from "next";
// import prisma from "@/lib/connection";
// // import { authenticatedMiddleware, create_token } from "@/lib/jwt";
// import { User } from "@prisma/client";

// const refreshToken = authenticatedMiddleware(async function (req, res) {
//   const jwt = create_token(req.token);
//   return res.status(200).json({ emailVerified: true, jwt, user: req.user });
// });
// const verifySignature = async function (
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {};
// const generateVerificationToken = async function (
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {};
// export default async function (req: NextApiRequest, res: NextApiResponse) {
//   const method = req.method || "";
//   await prisma?.$connect();
//   console.log(method);
//   switch (method.toUpperCase()) {
//     case "GET":
//       return await verifySignature(req, res);

//     case "POST":
//       return await generateVerificationToken(req, res);
//     case "PATCH":
//       return await refreshToken(req, res);
//     default:
//       res.setHeader("Allow", ["POST", "GET", "PATCH"]);
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }
import axios, { AxiosInstance } from "axios";
import useAuthStore from "@/app/hooks/authStore";
