@recent_messages.each do |message|
  json.set! message.id do
    json.extract! message, :id, :body, :user_id, :room_id
  end
end
