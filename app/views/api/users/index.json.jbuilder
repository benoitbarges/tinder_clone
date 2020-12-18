json.array! @users do |user|
  photos = []
  user.photos.each { |photo| photos << rails_blob_path(photo) }
  json.infos user
  json.photos photos
end
