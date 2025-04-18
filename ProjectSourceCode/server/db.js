const pgp = require("pg-promise")();

const dbConfig = {
  host: process.env.DB_HOST, // updated to use env var
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  ssl: { rejectUnauthorized: false } // required for Neon
};

const db = pgp(dbConfig);

db.connect()
  .then((obj) => {
    console.log("Database connection successful");
    obj.done();
  })
  .catch((error) => {
    console.log("ERROR:", error.message || error);
  });

module.exports = db;
