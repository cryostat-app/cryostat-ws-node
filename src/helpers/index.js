module.exports = {
  verboseLog: (prefix, ...args) => {
    console.log(`[${prefix.toUpperCase()}]`, ...args)
  }
}