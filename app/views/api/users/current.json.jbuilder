matches = current_user.matches.map do |match|
  user_matched = match.match_with.find { |user| user.id != current_user.id}
  match.as_json.merge({
                        match_with: user_matched.as_json.merge({ photo: rails_blob_path(user_matched.photo) }),
                        messages: match.messages
                      })
end

hash_infos = {
                matches: matches,
                given_likes_to: current_user.given_likes.map(&:receiver_id),
                given_dislikes_to: current_user.given_dislikes.map(&:receiver_id),
                received_likes_from: current_user.received_likes.map(&:user),
                messages: current_user.messages,
                photo: rails_blob_path(@user.photo)
              }
hash = @user.as_json.merge(hash_infos)
json.merge! hash
