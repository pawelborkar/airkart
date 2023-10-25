import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { category, product } from './routes/index.js';
dotenv.config({
  path: './.env',
});

const app = express();
const PORT = process.env.PORT || 8000;

const API_VERSION = process.env.API_VERSION || 'v1';

app.use(express.json());
app.use(`/api/${API_VERSION}/products`, product);
app.use(`/api/${API_VERSION}/categories`, category);

connectDB();

app.listen(PORT, () => {
  console.log(`🎉 Server is up and running on port: ${PORT} 🎉`);
});
