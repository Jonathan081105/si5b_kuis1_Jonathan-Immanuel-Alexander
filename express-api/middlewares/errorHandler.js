const notFound = (req, res, next) => {
  const error = new Error("Rute tidak ditemukan");
  error.status = 404;
  next(error);
};

const errorHandler = (err, req, res, next) => {
  // If the error comes from express.json (like bad JSON), err.status will be 400
  const status = err.status || 500;
  res.status(status).json({
    status: "error",
    message: err.message || "Internal Server Error",
    data: null
  });
};

module.exports = { notFound, errorHandler };
