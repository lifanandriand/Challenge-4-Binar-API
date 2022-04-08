const express = require("express");
const app = express();
const port = 3000;

const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.json());

// const middleware = require("./middleware")

const router = require("./routes");
app.use("/api/v1",  router);

app.listen(port, () => {
  console.log(`Server challenge 4 berjalan pada port ${port}`);
});