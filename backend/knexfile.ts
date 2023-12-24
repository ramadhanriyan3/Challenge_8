// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "rbinar-rent-db.internal",
      port: 5432,
      user: "postgres",
      password: "CMV7l6P5iZaL6hq",
      database: "postgres",
    },
  },

  staging: {
    client: "pg",
    connection: {
      host: "rbinar-rent-db.internal",
      port: 5432,
      user: "postgres",
      password: "CMV7l6P5iZaL6hq",
      database: "postgres",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: {
      host: "rbinar-rent-db.internal",
      port: 5432,
      user: "postgres",
      password: "CMV7l6P5iZaL6hq",
      database: "postgres",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
