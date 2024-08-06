import { log } from "@repo/logger";
import { serve } from "@hono/node-server";
import { createServer } from "./server";

const port = process.env.PORT ? parseInt(process.env.PORT) : 5001;
const app = createServer();

// Adjust below based on choice of runtime and/or deployment. By default, we are using Node.js

serve({
  fetch: app.fetch,
}).listen({ port }, () => {
  log(`api running on ${port.toString()}`);
});

export type AppType = typeof app;
