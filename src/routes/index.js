const { Router } = require('express');
const { append, redirect } = require('express/lib/response');
const router = Router();
const {TwitterApi} = require('twitter-api-v2');
require('dotenv').config()

//Raiz
router.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo usando rutas!"
        }
    );
})

router.post('/test',(req,res)=>{
    res.json(
        {
            "AUTH_TOKEN":req.body.auth_token,
            "AUTH_TOKEN_SECRET":req.body.auth_token_session
        }
    )
})

router.post('/',(req,res)=> {
    console.log('auth: '+req.body.auth_token)
    console.log(req.body.auth_token_session)

    const client=new TwitterApi({
        appKey:process.env.APPKEY,
        appSecret:process.env.APPSECRET,
        accessToken:req.body.auth_token,
        accessSecret:req.body.auth_token_session
    })

    client.v2.singleTweet('1487146242810241900', {
        'tweet.fields': [
            'organic_metrics',
         ],
      }).then((val) => {
        console.log(val)
    }).catch((err) => {
        console.log(err)
    })
    
    client.v1.tweet('Estamos emocionados con la TRI').then((val) => {
        console.log(val)
        res.json(
            {
                "auth_token":"200",
                "auth_token_session":"Enviado"
            }
        );
    }).catch((err) => {
        console.log(err)
        res.json(
            {
                "auth_token":"500",
                "auth_token_session":"err"
            }
        );
    })

})

/*
router.get('/', function(req, res, next){
  res.render('index',{title:'Test',condition:false});
});

router.get('/form',function(req,res,next){
  res.render('form');
})

router.post('/submit', function(req,res,next){
  console.log(req.body['test']);
  res.redirect('/');
})*/
 
module.exports = router;