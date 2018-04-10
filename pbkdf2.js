const crypto = require('crypto');

const password = 'secret';
const salt = crypto.randomBytes(16).toString('hex');
const iterations = 1000000;
const keylen = 64;
const algorithm = 'sha512';

crypto.pbkdf2(
  password, salt, iterations, keylen, algorithm,
  (err, hash) => {
    if (err) {
      console.log(err.message);
      return;
    }

    console.log('Salt', salt);
    console.log('Hash', hash.toString('hex'));
  }
);
