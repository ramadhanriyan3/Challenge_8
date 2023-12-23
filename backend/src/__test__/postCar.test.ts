import app from "../../server/";
import { CarsModel } from "../models/cars";
import request from "supertest";
import Knex from "knex";
import { Model } from "objection";

describe("Post /cars/create", () => {
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
    await CarsModel.query().delete();
  });

  it("should response with 201 as status code", async () => {
    const res = await request(app)
      .post("/cars/create")
      .field("model", "avanza")
      .field("rentPerDay", 400000)
      .attach("picture", __dirname + "./../models/JKR.jpg");

    expect(res.statusCode).toBe(201);
  }, 10000);

  it("should response with 400 as status code", async () => {
    const res = await request(app)
      .post("/cars/create")
      .field("model", "avanza")
      .field("rentPerDay", 400000);
    expect(res.statusCode).toBe(400);
  });

  // it("should response with 500 as status code", async () => {
  //   const res = await request(app).post("/cars/create/jj");
  //   expect(res.statusCode).toBe(500);
  //   console.log(res.body);
  // });
});
