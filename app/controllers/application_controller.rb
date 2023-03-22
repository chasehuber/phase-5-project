class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  before_action :authorized
  def authorized
    return render json:{errors: "Not authorized, please log in"}, status: :unauthorized unless session.include? :user_id
  end

  private
  
  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.message }, status: :unprocessable_entity
  end

  def render_not_found_response(exception)
    render json: { errors: exception.message }, status: :not_found
  end
end
