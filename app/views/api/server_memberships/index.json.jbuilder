@user_servers.each do |server|
  json.set! server.id do
    json.extract! server, :id, :name, :icon_url, :admin_id, :dm_status
  end
end
