const express = require("express");
const app = express();
const port = 100;

app.use (express.static("frontend/dist"));

app.listen(port, () =>
  console.log(`the server has been started on port ${port}`)
);
