@dm_rooms.each do |room|
  json.set! room.id do
    json.extract! room, :id, :name
  end
end
