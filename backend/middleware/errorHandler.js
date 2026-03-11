const errorCodes = require("../constant/errorCodes");

module.exports = errorHandler = (err, req, res, next) => {
  const errorKey = Object.keys(errorCodes);
  const error = err.message;
  const errorMatch = errorKey.includes(error);
  // console.log(errorMatch);

  if (errorMatch) {
    const status = errorCodes[error].httpStatusCode;
    const code = errorCodes[error].body.code;
    const message = errorCodes[error].body.message;

    res.status(status).json({
      code,
      message,
    });
  } else {
    res.status(err.status || 500).json({
      code: err.code || "server_crashed",
      message: err.message || "Server crashed",
    });
  }

  const message = err?.message;

  return res.status(500).json(message || "Internal Server Error");
};
