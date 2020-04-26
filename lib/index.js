const path = require("path");
const express = require("express");

const app = express();

const PORT = 3020;
const DIST = '../dist';

app.use(express.static(path.join(__dirname, DIST)));
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, DIST, "index.html"));
});
app.listen(PORT, () => {
  console.log(`LISTENING PORT ${PORT}`);
})
