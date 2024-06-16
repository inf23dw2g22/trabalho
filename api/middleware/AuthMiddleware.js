const passport = require("passport");

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

function isAuthenticated(req, res, next) {
  if (!req.user) {
    return res
      .status(401)
      .json({ message: "Autenticação Necessária" });
  }
  next();
}
module.exports = { isLoggedIn, isAuthenticated };
