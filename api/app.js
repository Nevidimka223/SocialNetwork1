const express = require('express');
const configService = require('./services/configService');

const DiContainer = require('./services/diContainer');
const knex = require('knex');
const dbConnection = knex(configService.getPGCredentials());

DiContainer.register('dbConnection', dbConnection)

const app = express();
const port = configService.getPort();
app.use(express.json());

const postsRouter = require('./routes/posts');

app.use('/', postsRouter); 

app.use ('/',(req,res)=>{
  res.send('HI')
});

app.use((err, req, res, next) => {
  res.status(500).send('500: Internal Server Error');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
