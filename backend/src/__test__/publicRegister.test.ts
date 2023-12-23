import app from "../../server/";
import { UsersModel } from "../models/users";
import request from "supertest";
import Knex from "knex";
import { Model } from "objection";

describe("Post /register", () => {
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
  });

  afterEach(async () => {
    await UsersModel.query().delete();
  });

  it("should response with 201 as status code", async () => {
    const registerPayload = {
      name: "riyan",
      password: "123456",
      email: "riyan123@gmail.com",
    };
    const res = await request(app).post("/register").send(registerPayload);
    expect(res.statusCode).toBe(201);
  });
});
