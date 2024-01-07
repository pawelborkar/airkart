import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { auth, cart, category, product, profile } from './routes/index.js';
import { errorHandler } from './middlewares/error.middlewares.js';
dotenv.config({
  path: './.env',
});

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;

const API_VERSION = process.env.API_VERSION || 'v1';

app.use(express.json());

// Error handler middleware
app.use(errorHandler);

// Routes
app.use(`/api/${API_VERSION}/auth`, auth);
app.use(`/api/${API_VERSION}/categories`, category);
app.use(`/api/${API_VERSION}/products`, product);
app.use(`/api/${API_VERSION}/profile`, profile);
app.use(`/api/${API_VERSION}/:userId`, cart);

// Database connection
connectDB();

app.listen(PORT, () => {
  console.log(`🎉 Server is up and running on port: ${PORT} 🎉`);
});
