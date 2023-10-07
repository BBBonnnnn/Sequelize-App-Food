import express from 'express'
import cors from 'cors'
import rootRoute from './routes/rootRoute.js';

const app =  express();

app.listen(8080);

app.use(cors());

app.use(express.json());

app.use("/api",rootRoute);