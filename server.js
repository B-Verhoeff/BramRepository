import express from 'express';
const app = express();
const port = 3000;
const fs = require('node:fs');


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/mensen', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('json/person.json', function(err, data){
      res.send(data);
  });
});