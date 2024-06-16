const express = require("express");
const passport = require("passport");
const router = express.Router();
const authMiddleware = require ('../middleware/AuthMiddleware')

router.get("/", (req, res) => {
  res.send('<a href="/auth/github"> Github Login');
});

router.get("/me", authMiddleware.isAuthenticated, function (req, res) {
  res.json(req.user);
});

router.get("/logout", function (req, res) {
  req.logout(function (err) { if (err) { console.log(err); } res.redirect("/login"); });
});

router.get("/auth/access_token", function(req, res) {
    res.json(req.session.user_session)
  }
);

router.get("/auth/github", passport.authenticate("github", { scope: ["user"] }), function (req, res) { 
});

router.get("/auth/github/callback", passport.authenticate("github", { failureRedirect: "http://localhost:4000/login" 
}),function (req, res) { 
  req.session.user_session = req.session.passport.user
  req.session.save(function (err) {
    if (err) return next(err)
    res.redirect( process.env.UI_URI + "login?code=SUCCESS")
  })
});

module.exports = router;
