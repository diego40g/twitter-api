const {TwitterApi} = require('twitter-api-v2');
require('dotenv').config()

const client=new TwitterApi({
    appKey:process.env.APPKEY,
    appSecret:process.env.APPSECRET,
    accessToken:process.env.ACCESSTOKEN,
    accessSecret:process.env.ACCESSSECRET
})

client.v2.singleTweet('1487146242891296770', {
    'tweet.fields': [
        'organic_metrics',
     ],
  }).then((val) => {
    console.log(val)
}).catch((err) => {
    console.log(err)
})

client.v1.tweet('This tweet was written by a bot').then((val) => {
    console.log(val)
    console.log("success")
}).catch((err) => {
    console.log(err)
})