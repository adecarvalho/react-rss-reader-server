const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
//require("dotenv").config();

const port = process.env.PORT || 8080;

const app = express();

//functions
const notFound = (res, req, next) => {
  const err = new Error("Route  not found ...");
  res.status(404);
  next(err);
};

const errorHandler = (error, req, res, next) => {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message
  });
};

//midlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.json({ app: "Le monde rss Reader" });
});
//les flux
app.use("/api/rss_reader/flux", require("./routes/fluxRoute"));
//
//les articles
app.use("/api/rss_reader/articles", require("./routes/lemondeRoute"));

//
app.use(notFound);
app.use(errorHandler);

//connected
app.listen(port, () => {
  console.log(`server connected on port : ${port}`);
});
