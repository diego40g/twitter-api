const express=require('express');
const app=express();
const morgan=require('morgan');

//body configuration
const bodyParse = require('body-parser')
app.use(bodyParse.urlencoded({
  extended:false,
}))
app.use(bodyParse.json());

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

app.use(require('./src/routes/index'))

//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});
