const { WebSocket } = require('ws');
const { EventEmitter } = require('events');
const helpers = require('./helpers');
const { handleMessage } = require('./handlers');

/**
 * CryoStat client
 */
class CryoStatClient extends EventEmitter {
  /**
   * CryoStat client handler
   * @param {string} token Token needed to authenticate with the gateway
   * @param {object} options Options object for the client
   * @param {string} options.url Gateway url
   * @param {boolean} options.verbose Enable verbose logging
   */
  constructor(token, options) {
    super();
    this.verbose = options?.verbose || false;
    this.log = helpers.verboseLog
    this.url = options?.url || 'wss://gateway.cyrostat.app/';
    this.token = token;
    this.ws = null;
  }

  /**
   * Connect to the gateway.
   */
  async connect () {
    this.log('WS', 'Connecting to', this.url);

    this.ws = new WebSocket(this.url);

    this.ws.on('message', handleMessage.bind(this));

    this.ws.on('open', _ => {
      this.log('debug', 'Websocket Connected');
      // TODO: Handle authentication
    });

    this.ws.on('close', _ => {
      this.log('debug', 'Websocket Disconnected');
    });
  }
}

module.exports = CryoStatClient;