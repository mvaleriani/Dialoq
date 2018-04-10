@friends.each do |friend|
  json.set! friend.id do
    json.extract! friend, :id, :username, :image_url, :online_status
  end
end
