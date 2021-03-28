const app = require('express')()
const { v4 } = require('uuid')
const axios = require('axios')

app.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
  res.end(`Hello!`)
})

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params
  res.end(`Item: ${slug}`)
})

app.get('/api/trending', (req, res) => {
    axios
    .get("https://egs-api.trackstats.workers.dev/")
    .then((response) => {
      res.send(response.data);
    });
})

module.exports = app