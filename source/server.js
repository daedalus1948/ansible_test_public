const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Ansible World! 2');
});

app.listen(port, () => {
  console.log(`ANSIBLE - Example app listening at http://localhost:${port}`);
});