import app from "../../server/";
import { CarsModel } from "../models/cars";
import request from "supertest";
import Knex from "knex";
import { Model } from "objection";

describe("Patch /cars/:id/update", () => {
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

    await CarsModel.query().insert([
      {
        plate: "ABC123",
        id: "car01",
        manufacture: "Toyota",
        model: "Camry",
        year: 2023,
      },
    ]);
  });

  afterEach(async () => {
    await CarsModel.query().delete();
  });

  it("should response with 200 as status code (with image)", async () => {
    const res = await request(app)
      .patch("/cars/car01/update")
      .field("model", "avanza")
      .attach("picture", __dirname + "./../models/JKR.jpg");

    expect(res.statusCode).toBe(200);
    console.log(res.body);
  }, 10000);

  it("should response with 200 as status code", async () => {
    const res = await request(app)
      .patch("/cars/car01/update")
      .field("model", "avanza")
      .field("rentPerDay", 400000);
    expect(res.statusCode).toBe(200);
    console.log(res.body);
  });
});
