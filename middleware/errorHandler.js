const errorHandler = (err, req, res, next) => {

    const statusCode = res.statusCode ? res.statusCode : 500;
    res.json({
        error: {
          message: err.message || 'Internal Server Error',
        },
      });
};


module.exports = errorHandler