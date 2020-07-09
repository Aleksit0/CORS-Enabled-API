const express = require('express');
const body_parser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express(); 

// Convert requests to json format
app.use(body_parser.json());

// CORS configuration
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PATCH', 'DELETE']
}));

// Dotenv config
dotenv.config({
  path: '.env'
});

// Routing
const posts_route = require('./routing/posts');

app.use(express.json());
app.use('/posts', posts_route);

app.get('/', (req, res) => {
  res.send('Homepage');
  console.log('-HOMEPAGE(console output)');
});

// Port listening
const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log('-There has been error: ', err);
    process.exit(1);
  }
  
  // Database connection
  require('./utils/database/database'); 
  
  console.log(`-Server running on port ${PORT}. CORS enabled.`);
});