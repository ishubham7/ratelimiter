const moment = require('moment');
const redisClient = require('./redisClient').client;

const RATE_LIMIT_TIME = 60
const REQUEST_LITMIT = 10


exports.ratelimitter = ratelimitter;


async function ratelimitter(req,res,next){
    const userId = req.headers['user-id'];
    const currentTime = moment().format(); 

    const response = await redisClient.hGetAll(userId)

        console.log('here',currentTime)
    // if(Object.keys(response).length == 0){
    //     await redisClient.hSet(userId,{
    //         "createdAt":currentTime,
    //         "count":1
    //     })

    //     return next()
    // } 

    // console.log(response)
}