import app from "../../server/";
import { UsersModel } from "../models/users";
import request from "supertest";
import Knex from "knex";
import { Model } from "objection";
import { v4 as uuidv4 } from "uuid";
import encryptPassword from "./../helper/encryptPassword";

describe("Post /login", () => {
  let knex: Knex.Knex<any, unknown[]> | undefined;
  beforeAll(async () => {
    knex = Knex({
      client: "sqlite3",
      connection: ":memory:",
      useNullAsDefault: true,
    });

    Model.knex(knex);
  });

  afterAll(async () => {
    await knex!.destroy();
  });

  beforeEach(async () => {
    await knex?.migrate.latest();
    await UsersModel.query().insert([
      {
        user_id: uuidv4(),
        name: "marcell",
        email: "marcell.superadmin@gmail.com",
        password: await encryptPassword("123456"),
        role: "super_admin",
      },
    ]);
  });

  afterEach(async () => {
    await UsersModel.query().delete();
  });

  it("should response with 404 as status code email not found", async () => {
    const registerPayload = {
      password: "123456",
      email: "riyan123@gmail.com",
    };
    const res = await request(app).post("/login").send(registerPayload);
    expect(res.statusCode).toBe(404);
  });

  it("should response with 401 as status code unauthorize", async () => {
    const registerPayload = {
      password: "123r456",
      email: "marcell.superadmin@gmail.com",
    };
    const res = await request(app).post("/login").send(registerPayload);
    expect(res.statusCode).toBe(401);
  });

  it("should response with 201 as status code succes", async () => {
    const registerPayload = {
      password: "123456",
      email: "marcell.superadmin@gmail.com",
    };
    const res = await request(app).post("/login").send(registerPayload);
    expect(res.statusCode).toBe(201);
  });
});
