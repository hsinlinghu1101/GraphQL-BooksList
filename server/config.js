const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  mongoDB_Url: process.env.MONGODB_URL,
  port: process.env.PORT
};