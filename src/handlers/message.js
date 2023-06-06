/**
 * Message handler for CryoStat client
 * @param {*} message JSON Message from gateway
 */
function handleMessage (message) {
  try {
    message = JSON.parse(message);
  } catch {
    this.log('error', 'Message failed to parse:', message);
  }

  switch (message.e) {
    case 'HEARTBEAT': {
      this.ws.send(JSON.stringify({ t: 2, e: 'HEARTBEAT' }));
      this.log('debug', 'Sent heartbeat', '(Ping:', Date.now() - message.d, 'ms)');
    } break;
    case 'AUTHENTICATE': {
      this.log('debug', 'Authetication requested from gateway... trying');
      this.ws.send(JSON.stringify({ t: 0, e: 'AUTHENTICATE', d: this.token }));
    } break;
    case 'AUTHENTICATION_SUCCESS': {
      this.log('debug', 'Successfully authenticated with the cryostat gateway');
    } break;
    default: {
      this.log('debug', 'Message recieved:', message);
    }
  }
}

module.exports = handleMessage;