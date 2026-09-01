/**
 * Global API Error Handling Middleware
 */
export const errorHandler = (err, req, res, next) => {
  console.error('[Server Error]:', err);
  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({
    success: false,
    error: {
      status,
      message,
      ...(process.env.NODE_ENV === 'development' ? { stack: err.stack } : {})
    }
  });
};

export const notFoundHandler = (req, res) => {
  res.status(404).json({
    success: false,
    error: {
      status: 404,
      message: `Route ${req.method} ${req.originalUrl} not found`
    }
  });
};
