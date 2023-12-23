import app from "../../server/";
import { CarsModel } from "../models/cars";
import request from "supertest";
import Knex from "knex";
import { Model } from "objection";

describe("Get /cars/:id", () => {
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

  it("should response with 200 as status code", async () => {
    const res = await request(app).get("/cars/car01");
    expect(res.statusCode).toBe(200);
    expect(res.header["content-type"]).toMatch("application/json");
  });

  it("should response with 404 as status code", async () => {
    const res = await request(app).get("/cars/car04");
    expect(res.statusCode).toBe(404);
    expect(res.header["content-type"]).toMatch("application/json");
  });
});
