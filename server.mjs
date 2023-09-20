import express from "express";
import next from "next";
import dbConnect from "./lib/prisma/dbconn";
import bodyParser from "body-parser";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
dbConnect();
console.log("connected to DB");
app.prepare().then(() => {
  const server = express();
  server.get("/api/register", (req, res) => {
    res.json({ message: "regisered succefully" });
  });
  server.use(bodyParser.json()); // Parse JSON request bodies

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  //@ts-ignore
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
