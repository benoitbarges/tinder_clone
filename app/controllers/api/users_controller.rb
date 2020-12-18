class Api::UsersController < ActionController::Base

  def current
    photos = []
    current_user.photos.each { |photo| photos << rails_blob_path(photo) }
    render json: {
                  infos: current_user,
                  matches: current_user.matches,
                  given_likes_to: current_user.given_likes.map(&:receiver_id),
                  received_likes_from: current_user.received_likes.map(&:user),
                  messages: current_user.messages,
                  photos: photos
                }
  end

  def index
    @users = User.all
  end
end
