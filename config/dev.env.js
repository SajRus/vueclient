'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_BASE_URL: "'http://localhost'",
  API_BASE_PORT: 3003,
  IMAGE_SERVER_PATH: "'image server here'",
  DEBUG_MODE: true
  
})
