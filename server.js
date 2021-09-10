require("dotenv").config();
const express = require("express");
const connectDatabase = require("./src/database/database");
const routes = require("./src/routes/routes");

connectDatabase();

const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.info(`aplicação rodando em http://localhost:${port}`);
});
