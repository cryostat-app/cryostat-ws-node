const CryoStatClient = require('.')

const client = new CryoStatClient('123', {
  verbose: true,
  url: 'ws://localhost:8080/'
})

client.connect()