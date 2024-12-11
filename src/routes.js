import { randomUUID } from "node:crypto";
import { Database } from "./database.js";

const database = new Database();


export const routes = [
  {
    method: "GET",
    patch: "/users",
    handler: (req, res) => {
      const users = database.select("users");

      return res.end(JSON.stringify(users));
    },
  },
  {
    method: "POST",
    patch: "/users",
    handler: (req, res) => {
      const { name, email } = req.body;
      const user = {
        name,
        email,
        id: randomUUID(),
      };

      database.insert("users", user);

      return res.writeHead(201).end();
    },
  },
];
