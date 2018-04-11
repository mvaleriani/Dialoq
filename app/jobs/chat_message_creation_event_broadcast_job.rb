class ChatMessageCreationEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    message_channel = message.room.server.id.to_s+'_'+message.room_id.to_s
    ActionCable
      .server
      .broadcast(message_channel,
                 id: message.id,
                 created_at: message.created_at.strftime('%H:%M'),
                 user_id: message.user_id,
                 body: message.body)
  end

end
