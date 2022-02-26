const express = require("express");
const path = require("path");

const app = express();
const port = 3999;

app.use(express.static(path.resolve(__dirname, "../client/dist")));

app.listen(port, () => console.log(`running http://localhost:${port}`));
