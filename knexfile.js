// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/crud-stickers'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/stickers-test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
