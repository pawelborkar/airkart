import ErrorResponse from '../utils/errorResponse.js';

export const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;
  console.log(err);

  // Mongoose Bad ObjectID
  if (err.name === 'CastError') {
    const message = `Resource not found.`;
    error = new ErrorResponse(message, 404);
  }

  // Duplicate key
  if (err.code === 11000) {
    const message = `${JSON.stringify(err.keyValue)} already exists.`;
    error = new ErrorResponse(message, 400);
  }

  // Validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Internal Server Error.',
  });
};
