const { createClient } = require ('redis');



const client =  createClient({
    password: 'SlvtkL4NaYwVF9pxUlqrZ7lv1MSdu40x',
    socket: {
        host: 'redis-12018.c212.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 12018
    }
});
client.on('connect', () => console.log('DB connected'));   
client.on('error', (err) => console.log('Redis Connection Error', err));
client.connect()

exports.client = client;