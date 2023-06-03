const CryoStatClient = require('.')

const client = new CryoStatClient('changeme', {
  verbose: true,
  url: 'ws://localhost:8080/'
})

client.connect()