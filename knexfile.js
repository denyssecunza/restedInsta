// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: process.env.DATABASE_URL || {
      user: "jolizbethbonilla",
      database: "restedinsta",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "restedinsta",
      user: "jolizbethbonilla",
      password: "",
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
    client: "postgresql",
    connection: {
      database: "restedinsta",
      user: "jolizbethbonilla",
      password: "",
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
