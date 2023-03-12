class ApplicationController < ActionController::API
  include ActionController::Cookies

  # before_action :authorized
  def authorized
    return render json:{errors: "Not authorized, please log in"}, status: :unauthorized unless session.include? :user_id
  end

  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end
end
