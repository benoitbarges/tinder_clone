@users.each do |user|
  photos = []
  user.photos.each { |photo| photos << rails_blob_path(photo) }
  hash_infos = {
                matches: user.matches,
                given_likes_to: user.given_likes.map(&:receiver_id),
                given_dislikes_to: user.given_dislikes.map(&:receiver_id),
                received_likes_from: user.received_likes.map(&:user),
                messages: user.messages,
                photos: photos
              }
  hash = user.as_json.merge(hash_infos)
  json.set! user.id, hash
end
