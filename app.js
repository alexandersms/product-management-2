const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const createError = require("http-errors");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Middleware */
// Morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.all("/test", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// Import Routes
const ProductRoute = require("./routes/Product.route");

app.use("/api/v1/products", ProductRoute);

app.use((req, res, next) => {
  next(createError(404, "Non trouvée"));
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  });
});

const port = process.env.PORT || 3420;

app.listen(port, () =>
  console.log(
    `Démarrage du server en environnement de ${process.env.NODE_ENV} sur le port ${port}`
      .blue.bold
  )
);
