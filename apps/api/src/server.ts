import { Hono } from "hono";
import { cors } from "hono/cors";
import { drizzle } from "drizzle-orm/d1";
import { type HonoAppType } from "./types/hono";
import * as schema from "./db/schema";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type -- Take advantage of the Hono's type inferencing for routes
export const createServer = () => {
  const app = new Hono<HonoAppType>()
    .use("/*", cors())
    .get("/message/:name", async (c) => {
      const db = drizzle(c.env.DB, { schema });

      const name = await db.query.namesTable.findFirst({
        where: (names, { eq }) => eq(names.name, c.req.param("name")),
      });

      if (name)
        return c.json({ message: `Welcome back ${c.req.param("name")}` });

      try {
        const newName = await db
          .insert(schema.namesTable)
          .values({ name: c.req.param("name") })
          .returning();

        return c.json({
          message: `Hello ${newName[0].name}. You've been added to our database at ${new Date(newName[0].createdAt).toLocaleString()}`,
        });
      } catch (error) {
        return c.json({
          message: `Unable to create a new user named ${c.req.param("name")}`,
        });
      }
    })
    .get("/status", (c) => {
      return c.json({ ok: true });
    });

  return app;
};
