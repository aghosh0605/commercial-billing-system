import request from "supertest";
import { app } from "../src/app";
import { connectDB, closeDB } from "../src/data-source";

beforeEach(async () => {
  await connectDB();
});

const signupData = {
  username: "test",
  name: "Test User",
  email: "test@gmail.com",
  password: "900000000iI@",
};

const signinData = {
  username: "test",
  password: "900000000iI@",
};

describe("Health Endpoints", () => {
  it("Signup should return 201", async () => {
    const res = await request(app).post("/api/v1/auth/signup").send(signupData);
    expect(res.statusCode).toEqual(201);
  });
  it("Signin should return 200", async () => {
    const res = await request(app).post("/api/v1/auth/signin").send(signinData);
    expect(res.statusCode).toEqual(200);
  });
});

afterEach(async () => {
  await closeDB();
});
