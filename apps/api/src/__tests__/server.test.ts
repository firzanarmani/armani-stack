import supertest from "supertest";
import { createAdaptorServer } from "@hono/node-server";
import { createServer } from "../server";

describe("Server", () => {
  it("health check returns 200", async () => {
    await supertest(createAdaptorServer(createServer()))
      .get("/status")
      .expect(200)
      .then((res) => {
        expect(res.ok).toBe(true);
      });
  });

  it("message endpoint says hello", async () => {
    await supertest(createAdaptorServer(createServer()))
      .get("/message/jared")
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ message: "hello jared" });
      });
  });
});
