function logoutController(req, res) {
    res.cookie("jwt", "", { expires: new Date(0), httpOnly: true });
    res.send({ message: "removed" });
  }
  
  module.exports = logoutController;
  