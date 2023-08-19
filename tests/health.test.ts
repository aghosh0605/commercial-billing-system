import request from "supertest";

import app, { server } from "../src/index";

describe("Health Endpoints", () => {
  it("Health Simple should return 200", async () => {
    const res = await request(app).get("/api/v1/health");
    expect(res.statusCode).toEqual(200);
  });
  it("Health Debug should return 200", async () => {
    const res = await request(app).get("/api/v1/health/debug");
    expect(res.statusCode).toEqual(200);
  });
});

afterAll(() => {
  server.close();
});
