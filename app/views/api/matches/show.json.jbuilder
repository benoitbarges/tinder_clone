user_ids = @match.user_matches.map(&:user_id)

hash = @match.as_json.merge({ user_ids: user_ids})

json.set! @match.id, hash
