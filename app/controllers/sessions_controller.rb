class SessionsController < ApplicationController
  skip_before_action :authorized, only: :create
  def create
    user = User.find_by(username: params[:username])
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def destroy
    cookies.delete :user_id
    head :no_content
  end
end