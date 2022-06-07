const express = require ('express')
const app = express()
const axios = require('axios');
const PORT = 5000;

app.disable('view cache');
app.set("view engine", "ejs");
var global = {};

app.get('/', async (req, res) => {

 await axios.get('http://myapp-back-sv.myapp')
        .then(res => { data = res.data })
        .catch(error => {console.error(error);});

 res.setHeader('Access-Control-Allow-Origin', '*');
 res.status(200).render("index",{ data : data.members });

})


app.listen(PORT,()=>{
    console.log(`server listen to port ${PORT}`);
})

