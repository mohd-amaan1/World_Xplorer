class HttpError extends Error {
  constructor(message, errorCode) {
    super(message);    // Calls the constructor of the parent Error class, setting the error message.
    this.code = errorCode;
  }
}

module.exports = HttpError;
