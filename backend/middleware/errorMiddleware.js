const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode == 200 ? 500 : res.statusCode;
  let message = err.message;
  // when the object is not found
  if (err.name == "CastError" && err.kind == "ObjectId") {
    statusCode = 404;
    message = "Resorse Not Found";
  }
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV == "production" ? null : err.stack,
  });
};
export { notFound, errorHandler };