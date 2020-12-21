@users.each do |user|
  photos = []
  user.photos.each { |photo| photos << rails_blob_path(photo) }
  hash_photos = {photos: photos}
  hash = user.as_json.merge(hash_photos)
  json.set! user.id, hash
end
