const crypto = require('crypto');
const fs = require('fs');
const stream = require('stream');

const fromHex = new stream.Transform({
  transform (chunk, encoding, callback) {
    const buffer = Buffer.from(
      chunk.toString('utf8'), 'hex');

    this.push(buffer);
    callback();
  }
});

const secret = process.argv[2];

const decryptionStream =
  crypto.createDecipher('aes-256-cbc', secret);

process.stdin.
  pipe(fromHex).
  pipe(decryptionStream).
  pipe(process.stdout);
