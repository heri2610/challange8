class ApplicationError extends Error {
  // eslint-disable-next-line class-methods-use-this
  get details() {
    return {};
  }

  toJSON() {
    return {
      error: {
        name: this.name,
        message: this.message,
        details: this.details,
      },
    };
  }
}

module.exports = ApplicationError;
