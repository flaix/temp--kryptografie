const crypto = require('crypto');
const fs = require('fs');
const stream = require('stream');

const toHex = new stream.Transform({
  transform (chunk, encoding, callback) {
    const hex = chunk.toString('hex');

    this.push(hex);
    callback();
  }
});

const secret = process.argv[2];

const encryptionStream =
  crypto.createCipher('aes-256-cbc', secret);

process.stdin.
  pipe(encryptionStream).
  pipe(toHex).
  pipe(process.stdout);
