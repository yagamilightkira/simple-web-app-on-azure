const express = require('express');

const app = express();
const PORT = 8787;

app.get("/test", ( req, res ) => {
  res.send('<marquee><h1>Working...</h1></marquee>');
})

app.listen( PORT, () => {
  console.log(`Server is running at ${PORT}`)
})
