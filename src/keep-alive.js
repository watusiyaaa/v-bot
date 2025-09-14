// web server

const express = require("express");

function keepAlive() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.get("/", (req, res) => res.send("V-bot's running"));

  app.listen(PORT, () => {
    console.log(`Bot\'s running on port ${PORT}`);
  });
}

module.exports = keepAlive;
