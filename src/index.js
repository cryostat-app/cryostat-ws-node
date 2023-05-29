const { WebSocket } = require('ws');
const { EventEmitter } = require('events');
const helpers = require('./helpers');

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
  constructor (token, options) {
    this.verbose = options?.verbose || false;
    this.log = this.verbose ? helpers.verboseLog : () => { };
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

    this.ws.on('open', _ => {
      // TODO: Handle authentication
    });
  }
}

module.exports = CryoStatClient