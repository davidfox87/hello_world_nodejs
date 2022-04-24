require('dotenv').config();
const env = process.env;
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, SECRET, MODEL_URL, MODEL_POST } = env;
const config = {
  database: {
    host: DB_HOST || 'localhost',
    port: DB_PORT || 3306,
    user: DB_USER || 'root',
    password: DB_PASSWORD || '',
    database: DB_NAME || 'sla-builder',
  },
  SECRET: SECRET,
  MODEL_URL: MODEL_URL,
  MODEL_POST: MODEL_POST,
};
module.exports = config;
