/**
 * Message handler for CryoStat client
 * @param {*} message JSON Message from gateway
 */
function handleMessage (message) {
  try { 
    message = JSON.parse(message)
    this.log('debug', 'Message recieved:', message)
  } catch {
    this.log('error', 'Message failed to parse:', message)
  }

  switch(message.e) {
    case 'HEARTBEAT': {
      this.log('debug', 'Sent heartbeat')
      this.ws.send(JSON.stringify({ t: 2, e: 'HEARTBEAT_RESPONSE' }))
    }
  }
}

module.exports = handleMessage