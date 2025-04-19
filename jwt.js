const jwt = require('jsonwebtoken');

const secretKey = 'your-secret-key';
const payload = {
  userId: '123456',
  role: 'user'
};
const options = {
  expiresIn: '30d'
};

const token = jwt.sign(payload, secretKey, options);

console.log('Generated JWT:', token);
