module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "b2bizzio"),
      user: env("DATABASE_USERNAME", "how"),
      password: env("DATABASE_PASSWORD", "h0db!zz1o"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
