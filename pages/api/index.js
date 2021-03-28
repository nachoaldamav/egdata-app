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
    const data = async () => {
        try {
          return await axios.get('https://egs-api.trackstats.workers.dev/')
        } catch (error) {
          console.error(error)
        }
      };
    console.log(data);
    res.json(data);
})

module.exports = app