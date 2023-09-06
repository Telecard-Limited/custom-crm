import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

let client: PrismaClient;

try {
  client = globalThis.prisma || new PrismaClient();
  if (process.env.NODE_ENV !== "production") globalThis.prisma = client;
} catch (error) {
  console.error("Error connecting to the database:", error);
  process.exit(1); // Exit the application if the connection fails
}

export default client;
