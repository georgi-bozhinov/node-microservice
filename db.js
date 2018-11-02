module.exports = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.POSTGRES_HOST || 'localhost',
    user: process.env.POSTGRES_USER || 'testuser',
    password: process.env.POSTGRES_PASSWORD || 'testpassword',
    database: process.env.POSTGRES_DB || 'test',
  },
});
