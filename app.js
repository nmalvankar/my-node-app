const express = require('express');
const app = express();

const FLAG = process.env.FLAG;

app.get('/', (req, res) => {
  res.send(`Hello, CTF player! Here is your flag: ${FLAG}`);
});

app.listen(3000, () => {
  console.log('App is running on port 3000');
});
