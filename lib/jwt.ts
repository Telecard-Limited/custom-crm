import { NextApiRequest, NextApiResponse } from "next";
import { IncomingHttpHeaders } from "http";
import jwt from "jsonwebtoken";
import prisma from "@/lib/connection";
import { User } from "@prisma/client";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export interface Token {
  id_token: string;
}

export const create_token = ({ id_token }: Token): string =>
  jwt.sign({ id_token }, JWT_SECRET, {
    expiresIn: "3d",
  });

export const verify_token = (session_state: string): Token | undefined => {
  try {
    return jwt.verify(session_state, JWT_SECRET) as Token;
  } catch (e) {
    return undefined;
  }
};

export const verify_headers = (
  headers: IncomingHttpHeaders,
  token?: string
): [Error] | [null, Token] => {
  if (!token) {
    const { authorization } = headers;
    if (!authorization) return [new Error("No authorization header")];

    token = authorization.split(" ")[1];
  }
  if (!token) return [new Error("No token")];

  const decoded = verify_token(token);
  if (!decoded) return [new Error("Invalid token")];

  return [null, decoded];
};

export interface NextApiRequestWithUser extends NextApiRequest {
  token: Token;
  user: User;
}

export type AppRequest = NextApiRequest & {
  token?: Token;
  user?: User;
};

export const authenticatedMiddleware =
  (
    handler: (
      req: NextApiRequestWithUser,
      res: NextApiResponse
    ) => Promise<void | User | null>
  ) =>
  async (req: AppRequest, res: NextApiResponse) => {
    const [error, verify] = await verify_headers(req.headers);
    if (error)
      return res
        .status(401)
        .json({ confirmation: false, message: error.message });

    // Use Prisma's query API to find a user by their ID (assuming id_token represents the user's ID)
    const user = await prisma.user.findUnique({
      where: {
        id: verify.id_token,
      },
    });

    if (!user) {
      return res.status(401).json({
        confirmation: false,
        message: "User not found",
      });
    }

    // Add the user and token to the request object
    req.token = verify;
    req.user = user;

    // Call the handler function
    await handler(req as NextApiRequestWithUser, res);
  };

export const connectAuthenticatedMiddleware = (req: any, res: any, next: any) =>
  // @ts-ignore

  authenticatedMiddleware(() => {
    next();
  })(req, res);
export const connectMongooseMiddleware = async (
  req: any,
  res: any,
  next: any
) => {
  // console
  await prisma?.$connect();
  console.log("connected to db");
  next();
};
