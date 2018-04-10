@server_rooms.each do |room|
  json.set! room.id do
    json.extract! room, :id, :name, :chategory_id, :server_id
  end
end
