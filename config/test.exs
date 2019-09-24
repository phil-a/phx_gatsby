use Mix.Config

# Configure your database
config :phx_gatsby, PhxGatsby.Repo,
  username: "postgres",
  password: "postgres",
  database: "phx_gatsby_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :phx_gatsby, PhxGatsbyWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn
