defmodule PhxGatsbyWeb.PageController do
  use PhxGatsbyWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
