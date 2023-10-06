const express = require('express');
const redisClient = require('./redisClient').client;
const ratelimitter = require('./ratelimitMiddleware').ratelimitter
const app = express();
const PORT = process.env.PORT || 8080


app.get('/hitme', ratelimitter ,async (req, res) => {
    const userId = req.headers['user-id'];
    
    const count = await redisClient.hGet(userId,"count")
    
    res.status(200).json({
        "message":"Access granted",
        count
    })
});


app.listen(PORT, () => {
    console.log('Listening on port 8080');
});