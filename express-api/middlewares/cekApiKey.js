const cekApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'] || req.query.apiKey;
  if (!apiKey || apiKey !== process.env.API_KEY) {
    // We will throw an error to be caught by the error handler, or return 401 directly.
    // I'll return 401 directly as it is standard.
    return res.status(401).json({
      status: "error",
      message: "Unauthorized: API Key is missing or invalid",
      data: null
    });
  }
  next();
};

module.exports = cekApiKey;
