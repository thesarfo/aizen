import express from "express";

import { router as routeApiV1 } from "@/routers/api.router";


import { errorHandlerMiddleware } from "@/middlewares/error.middleware";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandlerMiddleware);

app.use("/api/v1", routeApiV1);
