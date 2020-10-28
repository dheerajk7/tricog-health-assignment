module.exports.home = function (request, response) {
  return response.status(200).json({
    success: true,
    message: 'Welcome to our platform',
  });
};
