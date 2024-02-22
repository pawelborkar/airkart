import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import hpp from 'hpp';
import rateLimit from 'express-rate-limit';
import connectDB from './db/index.js';
import { errorHandler } from './middlewares/error.middlewares.js';
import { auth, cart, category, product, profile } from './routes/index.js';

dotenv.config({
  path: './.env',
});

const app = express();

const PORT = process.env.PORT || 8000;

const API_VERSION = process.env.API_VERSION || 'v1';

app.use(express.json());

// Error handler middleware
app.use(errorHandler);

// Set security headers
app.use(helmet());

// Prevent http params  pollution
app.use(hpp());

// Rate Limiting: 15req/min
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 150,
});

app.use(limiter);

//TODO: Toggle below comment before commit it to the production
// app.use(cors({ origin: `${process.env.CORS_ALLOWED_ORIGIN}` }));
app.use(cors());

// Database connection
connectDB();

// Routes

app.use(`/api/${API_VERSION}/auth`, auth);
app.use(`/api/${API_VERSION}/categories`, category);
app.use(`/api/${API_VERSION}/products`, product);
app.use(`/api/${API_VERSION}/profile`, profile);
app.use(`/api/${API_VERSION}/:userId`, cart);

app.listen(PORT, () => {
  console.log(`🎉 Server is up and running on port: ${PORT} 🎉`);
});
