const express = require('express');
const configService = require('./services/configService');

const app = express();
const port = configService.getPort();

const postsRouter = require('./routes/posts');

app.use ('/',(req,res)=>{
  res.send('HI')
});

app.use('/', postsRouter); 

app.use((err, req, res, next) => {
  res.status(500).send('500: Internal Server Error');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
