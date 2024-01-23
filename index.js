const express = require("express");
const app = express();
const cors = require("cors");
const port = 9090;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log("This app is running on port: " + port);
});
