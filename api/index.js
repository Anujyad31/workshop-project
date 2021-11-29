const express = require('express')
const app = express()
const port = 8000
const routes = require('./routes/index');


//add cors

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
})

//body parser middleware

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',routes);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})