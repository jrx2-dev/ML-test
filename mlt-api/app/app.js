import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import itemsRoutes from '../routes/items.routes.js';

const app = express();

app.use(cors());

app.use(morgan('dev'));

app.use(express.json());

app.use("/api", itemsRoutes);

app.get("/", (req, res) => res.send("<h1>Server running...</h1>"));

export default app;
