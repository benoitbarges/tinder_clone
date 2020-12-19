class Api::LikesController < ActionController::Base
  acts_as_token_authentication_handler_for User

  def create
    @like = Like.new(like_params)
    if @like.save!
      render status: :created
    else
      render_error
    end
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :receiver_id)
  end

  def render_error
    render json: { errors: @like.errors.full_messages }, status: :unprocessable_entity
  end
end
