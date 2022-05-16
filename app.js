const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
   res.send('Terrell Scott')
})

app.get('/helloworld', (req, res) => {
    res.status(301).send('The new url is http://localhost:4000/Hellowrld')
 })

 app.get('/hellowrld', (req, res) => {
    res.send('Hello World!')
 })

app.get('*', (req, res) => {
    res.status(404).send()
 })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})