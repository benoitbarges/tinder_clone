photos = []
@user.photos.each { |photo| photos << rails_blob_path(photo) }
hash_infos = {
                matches: current_user.matches,
                given_likes_to: current_user.given_likes.map(&:receiver_id),
                received_likes_from: current_user.received_likes.map(&:user),
                messages: current_user.messages,
                photos: photos
              }
hash = @user.as_json.merge(hash_infos)
json.merge! hash
