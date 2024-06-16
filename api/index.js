//Dependencies
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const bodyParser = require("body-parser");

//Controllers
const swaggerspec = require("./controller/DocsController");

//Routes
const calendarRoute = require("./routes/CalendarRoute")
const userRoute = require("./routes/UserRoute")
const eventRoute = require("./routes/EventRoute")
const categoryRoute = require("./routes/CategoryRoute")
const authRoute = require("./routes/AuthenticationRoute")

//Environment
const dotenv = require("dotenv")
const path = require("path");
dotenv.config({
  path: path.resolve(__dirname, './', `${process.env.NODE_ENV}.env`)
});

//Github Authentication Strategy
const GithubStrategy = require('passport-github2').Strategy;

const passportOptions = {
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CALLBACK_URL,
};

passport.use(new GithubStrategy(passportOptions,
  function (request, accessToken, refreshToken, profile, done) {
    profile.token = request;
    return done(null, profile);
  }
));

passport.serializeUser(function (user, done) {
  done(null, user);
})
passport.deserializeUser(function (user, done) {
  done(null, user);
})

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  optionsSuccessStatus: 200,
  credentials: true,
  origin: true
}));
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerspec));
app.use(
  "/",
  authRoute,
  calendarRoute,
  userRoute,
  eventRoute,
  categoryRoute);

app.listen(process.env.NODE_PORT, () => {
  console.log(`app running on ${process.env.NODE_PORT} mode at ${process.env.PROTOCOL}://${process.env.HOSTNAME}:${process.env.NODE_PORT}`)
});