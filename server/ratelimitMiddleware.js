const moment = require('moment');
const redisClient = require('./redisClient').client;

const RATE_LIMIT_TIME = 60
const REQUEST_LIMIT = 10


exports.ratelimitter = ratelimitter;


async function ratelimitter(req,res,next){
    const userId = req.headers['user-id'];
    const currentTime = moment().unix(); 

    const response = await redisClient.hGetAll(userId)

    if(Object.keys(response).length == 0){
        await redisClient.hSet(userId,{
            "createdAt":currentTime,
            "count":1
        })
        return next()
    }

    if(response){
        let timeDiff = (currentTime - response['createdAt'])

        if(timeDiff > RATE_LIMIT_TIME){
            await redisClient.hSet(userId,{
                "createdAt":currentTime,
                "count":1
            })
            return next()
        }
    }
    console.log("-->")
    if(response['count'] >= REQUEST_LIMIT){
        res.status(429).json({
            "errorMessage": "Request limit exceeded"
        })
    }else{
        const a = await redisClient.hIncrBy(userId,"count",1)
        return next()
    }

    

    // console.log(response)
}