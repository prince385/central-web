const express = require('express');
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ error: 'Token missing' });
    }
  
    jwt.verify(token, secretKey, (err, decodedToken) => {
      if (err) {
        return res.status(403).json({ error: 'Token invalid' });
      }
  
      // Attach the decoded token to the request object
      req.user = decodedToken;
  
      next();
    });
}

  module.exports = authenticateToken;