const express = require('express')
const configService = require('./services/configService')

const app = express()
const port = configService.getPort()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use((err, req, res, next) => {
  res.status(500).send('500: Internal Server Error');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
