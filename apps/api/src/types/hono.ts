import { type D1Database } from "@cloudflare/workers-types";

export interface HonoAppType {
  Bindings: {
    DB: D1Database;
  };
}
