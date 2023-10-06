const { createClient } = require ('redis');
require('dotenv').config()

const client =  createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});
client.on('connect', () => console.log('DB connected'));   
client.on('error', (err) => console.log('Redis Connection Error', err));
client.connect()

exports.client = client;