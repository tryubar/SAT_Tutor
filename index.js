 // index.js
  const express = require('express');
  const app = express();
  const port = 3000;
  app.use(express.json()); // Middleware to parse JSON bodies



    const path = require('path');

    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    // Serve login.html at /login
    app.get('/login', (req, res) => {
      res.sendFile(path.join(__dirname, 'login.html'));
    });

    // Basic login API endpoint
    app.post('/api/login', (req, res) => {
      const { username, password } = req.body;
      // Dummy authentication logic
      if (username === 'admin' && password === 'password') {
        res.json({ success: true, message: 'Login successful' });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });