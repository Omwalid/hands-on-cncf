const express = require ('express')
const app = express()

const PORT = 5000;

var data = {
"members": [
    { 
      "id": 1,     
      "name": "Mohammde Walid",
      "surname": "OUGHERB",
      "mission": "make a demo to understand istio"
    },
    {
      "id": 2,   	    
      "name": "omwalid",
      "surname": "OUGHERB",
      "mission": "test network policies"
    }]
}

app.get('/', (req, res) => {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.status(201).json(data)
})


app.listen(PORT,()=>{
    console.log(`server listen to port ${PORT}`);
})
