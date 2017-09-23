const express = require('express')
const {fork} = require('child_process')

const child = fork('./child')
const app = express()
app.set('port', 3000)

app.get('/fast-query', async (req, res, next) => {
  res.status(200).send("Fast results")
})
app.get('/slow-query', async (req, res, next) => {
  for (let i = 0; i < 100000; i++) {
    for (let j = 0; j < 10000; j++) {
      let someAnswer = i + j - 3
    }
  }     
  res.status(200).send("Slow Query")
})
app.get('/slow-query-with-child', async (req, res, next) => {
  child.send(req.params)
  child.on('message', data => {
    res.status(200).send(data)
  })  
})

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`)
})

module.exports = app

