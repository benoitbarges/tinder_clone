class Api::UsersController < ActionController::Base

  def current
    @user = current_user
    render json: @user
  end
end
