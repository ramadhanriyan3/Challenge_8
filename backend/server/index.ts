import express, { Express } from "express";
import knex from "knex";
import { Model } from "objection";
import path from "path";
import cors from "cors";
import carRouter from "./../src/routes/carRoutes";
import userRouter from "./../src/routes/userRoutes";
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";

const swaggerDocument = YAML.load(path.resolve(__dirname, "../openapi.yaml"));

// database conector
const app: Express = express();
const knexInstance = knex({
  client: "postgresql",
  connection: {
    database: "challenge_7",
    user: "postgres",
    password: "kalianda23",
  },
});
Model.knex(knexInstance);
// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// sepatation of concern untuk aplikasi router
app.use("/cars", carRouter);
app.use("/", userRouter);

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
