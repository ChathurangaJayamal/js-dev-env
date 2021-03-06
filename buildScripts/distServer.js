//serves the dist folder (production)
import express from "express";
import path from "path";
import open from "open";
import compression from "compression";
/* // we are no longer using webpack as we are serving static built files
// import webpack from "webpack";
// import config from "../webpack.config.dev"; */

const port = 3000;
const app = express();
// const compiler = webpack(config);

app.use(compression());

/* app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  })
); */
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.get("/users", function (req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    { id: 1, firstName: "Bob", lastName: "Smith", email: "bob@gmail.com" },
    {
      id: 2,
      firstName: "Tammy",
      lastName: "Norton",
      email: "tnorton@yahoo.com",
    },
    {
      id: 3,
      firstName: "Tina",
      lastName: "Lee",
      email: "lee.tina@hotmail.com",
    },
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
