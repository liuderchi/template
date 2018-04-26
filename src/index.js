<<<<<<< HEAD
module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')
=======
require('dotenv-safe').config();

console.log(`How are you, ${process.env.OWNER}?`);
>>>>>>> introduce dotenv-safe
