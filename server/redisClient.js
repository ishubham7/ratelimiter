const { createClient } = require ('redis');



const client =  createClient({
    password: "",
    socket: {
        host: "",
        port: 12018
    }
});
client.on('connect', () => console.log('DB connected'));   
client.on('error', (err) => console.log('Redis Connection Error', err));
client.connect()

exports.client = client;