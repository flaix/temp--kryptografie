const crypto = require('crypto');
const stream = require('stream');

const toHex = new stream.Transform({
  transform (chunk, encoding, callback) {
    const hex = chunk.toString('hex');

    this.push(hex);
    callback();
  }
});

const hashStream =
  crypto.createHash('sha256');

process.stdin.
  pipe(hashStream).
  pipe(toHex).
  pipe(process.stdout);
