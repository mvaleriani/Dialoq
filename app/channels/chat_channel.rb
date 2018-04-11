class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from params[:server_room]
  end

  def unsubscribed; end

  def create(opts)
    Message.create(
      body: opts.fetch('body'),
      user_id: opts.fetch('userId'),
      room_id: opts.fetch('roomId')
    )
  end
end
