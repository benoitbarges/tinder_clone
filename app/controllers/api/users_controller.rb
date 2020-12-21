class Api::UsersController < Api::BaseController

  def current
    @user = current_user
    authorize @user
  end

  def index
    @users = policy_scope(User)
  end
end
