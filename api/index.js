const express = require('express');
const path = require('path');
const serverless = require('serverless-http');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

// Add your other routes here as well, replacing your current app.js routes
// (Adjust paths if needed due to relative directories)

app.get('/service', (req, res) => {
  res.render('Service');
});

// ... continue for all other routes you had

// Export the handler wrapped by serverless-http
module.exports.handler = serverless(app);
