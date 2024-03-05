const crypto = require('crypto');
// console.log(Object.keys(crypto))
const randomId = crypto.randomBytes(16)

console.log(randomId.toString("hex"))

