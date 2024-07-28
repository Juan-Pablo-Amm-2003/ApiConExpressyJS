const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  let statusCode = err.status || 500;
  let errorMessage = err.message || "Internal Server Error";
  let errorType = err.name || "Error";

  if (err.name === "SequelizeValidationError") {
    statusCode = 400;
    errorMessage = "Validation Error";
  } else if (err.name === "SequelizeUniqueConstraintError") {
    statusCode = 409;
    errorMessage = "Conflict Error";
  }

  res.status(statusCode).json({
    message: errorMessage,
    error: {
      type: errorType,
      path: err.path,
      validationErrors: err.errors || [],
      timestamp: new Date().toISOString(),
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    },
  });
};

export default errorHandler;
