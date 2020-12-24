class Api::MatchesController < Api::BaseController

  def create
    @match = Match.new
    authorize @match
    if @match.save
      render json: @match
    else
      render_error
    end
  end

  def show
    @match = Match.find(params[:id])
    authorize @match
    render json: @match
  end

  private

  def render_error
    render json: { errors: @match.errors.full_messages }, status: :unprocessable_entity
  end
end
