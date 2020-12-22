class Api::DislikesController < Api::BaseController
  acts_as_token_authentication_handler_for User

  def create
    @dislike = Dislike.new(dislike_params)
    @dislike.user = current_user
    authorize @dislike
    if @dislike.save!
      redirect_to root_url
    else
      render_error
    end
  end

  private

  def dislike_params
    params.require(:dislike).permit(:user_id, :receiver_id)
  end

  def render_error
    render json: { errors: @dislike.errors.full_messages }, status: :unprocessable_entity
  end
end


# curl -i -X POST                                                              \
#      -H 'Content-Type: application/json'                                     \
#      -H 'X-User-Email: mike@gmail.com'                                      \
#      -H 'X-User-Token: brHsSHXvz5xdx2UaHNgo'                                 \
#      -d '{ "like": { "user_id": 1, "receiver_id": 3 } }' \
#      http://localhost:3000/api/likes
