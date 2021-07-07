const express = require('express');
const app = express()

app.get('/', (req, res)=>{
  res.send({ hi: 'there' })
})

const PORT = process.env.PORT || 5000
//In PRODUCTION, See if heroku providing a PORT || But if we are running on our sever then use 5000 in DEVELOPMENT env
app.listen(5001)
