const {
  DB_USER = '', DB_PASSWORD = '', DB_NAME = 'bcr',
  DB_HOST = '127.0.0.1', DB_PORT = '5432', PGDATABASE, PGHOST, PGPORT, PGUSER, PGPASSWORD,
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_development`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
  production: {
    username: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
    host: PGHOST,
    port: PGPORT,
    dialect: 'postgres',
  },
};
