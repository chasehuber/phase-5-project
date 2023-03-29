class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create, :show, :show_current_user]
  def index
    users = User.all
    render json: users, status: :ok
  end

  def show
    user = User.find_by!(id: params[:id])
    render json: user, status: :ok
  end

  def show_current_user
    user = User.find_by!(id: session[:user_id])
    render json: user, status: :ok
  end

  def find_user_by_name
    user = User.find_by!(username: params[:username])
    render json: user, status: :ok
  end

  def create
    user = User.create!(user_params)
    if user.valid?
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    user = User.find_by!(id: params[:id])
    user.update!(user_params)
    render json: user, status: :accepted
  end

  def destroy
    user = User.find_by!(id: params[:id])
    user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:username, :password, :email, :bio)
  end
end
