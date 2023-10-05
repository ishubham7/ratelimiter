const express = require('express');
const ratelimitter = require('./ratelimitMiddleware').ratelimitter
const app = express();



app.get('/hitme', ratelimitter ,async (req, res) => {
    
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});