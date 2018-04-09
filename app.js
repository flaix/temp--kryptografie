const textToAscii = function (text) {
  const ascii = [];

  for (let i = 0; i < text.length; i++) {
    const asciiCode = text.charCodeAt(i);

    ascii.push(asciiCode);
  }

  return ascii;
};

const asciiToText = function (ascii) {
  let text = '';

  for (let i = 0; i < ascii.length; i++) {
    const letter = String.fromCharCode(ascii[i]);

    text += letter;
  }

  return text;
};

const encrypt = function (plainText, key) {
  const plainAscii = textToAscii(plainText);
  const keyAscii = textToAscii(key);
  const xoredAscii = [];

  for (let i = 0; i < plainAscii.length; i++) {
    const xored = plainAscii[i] ^ keyAscii[i];

    xoredAscii.push(xored);
  }

  const cipherText = asciiToText(xoredAscii);

  return cipherText;
};

const decrypt = encrypt;

const plainText = 'Hallo';
const key = 'Welt!';

const cipherText = encrypt(plainText, key);
const decryptedText = decrypt(cipherText, key);

console.log(decryptedText);
