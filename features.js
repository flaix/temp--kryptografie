const crypto = require('crypto');

const ciphers = crypto.getCiphers();
console.log(ciphers);

const hashes = crypto.getHashes();
console.log(hashes);
