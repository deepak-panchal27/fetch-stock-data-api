function handleAllErrors(error, res) {
  return res.status(500).json({
    status: "error",
    message: error.message,
  });
}

module.exports = {
  handleAllErrors,
};
