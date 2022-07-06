process.browser = false
if (typeof Buffer === 'undefined') global.Buffer = require('buffer').Buffer

// If using the crypto shim, uncomment the following line to ensure
// crypto is loaded first, so it can populate global.crypto
// require('crypto')
