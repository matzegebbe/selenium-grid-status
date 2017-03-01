'use strict';

const express = require('express');

const PORT = 4445;

const app = express();

app.get('/', function (req, res) {
      var grid = require('selenium-grid-status');
      grid.available({
          host: process.argv[2],
          port: process.argv[3]
      }, function(err, status) {
          if (err) {
              console.log('Error', err);
              process.exit(1);
          }
          res.json(status);
      });
});
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
