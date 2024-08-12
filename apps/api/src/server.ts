import { Hono } from "hono";
import { cors } from "hono/cors";
import { type HonoAppType } from "./types/hono";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type -- Take advantage of the Hono's type inferencing for routes
export const createServer = () => {
  const app = new Hono<HonoAppType>()
    .use("/*", cors())
    .get("/message/:name", (c) => {
      return c.json({ message: `hello ${c.req.param("name")}` });
    })
    .get("/status", (c) => {
      return c.json({ ok: true });
    });

  return app;
};
