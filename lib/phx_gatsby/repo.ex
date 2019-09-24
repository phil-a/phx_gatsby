defmodule PhxGatsby.Repo do
  use Ecto.Repo,
    otp_app: :phx_gatsby,
    adapter: Ecto.Adapters.Postgres
end
