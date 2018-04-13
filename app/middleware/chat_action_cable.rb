class ChatActionCable < ActionCable::Connection::Websocket
  def initialize(app, options={})
    @app = app
  end

  def call(env)
    if ::Websocket::Driver.websocket?(env)
      ActionCable.server.call(env)
    else
      @app.call(env)
    end
  end
end
