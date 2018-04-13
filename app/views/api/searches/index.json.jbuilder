@search_results.each do |result|
  @name = result.username if result.is_a?(User)
  @name = result.name if result.is_a?(Server)
  json.set! @name.concat(result.id) do
    if result.is_a?(Server)
      json.extract result, :id, :name, :icon_url
    else
      json.extract result, :id, :username, :image_url
    end
  end
end
