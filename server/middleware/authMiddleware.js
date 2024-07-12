// added const jwt to file and changed const authMiddleware to const auth (double checked our previous suggestion from chatgpt)
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  // creating a function to get the token from the header
  const token = req.header('x-auth-token');

  // Check if the token exists
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  //Using jsonwebtoken library to validate token 
  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

app.use('/api/protected-route', auth, (req, res) => {
  res.json({ msg: 'You have access to this protected route', user: req.user });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

module.exports = auth; 