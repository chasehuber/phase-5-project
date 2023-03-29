require 'securerandom'

class ChatroomsController < ApplicationController
  skip_before_action :authorized, only: :index
  def index
    chatrooms = Chatroom.all
    render json: chatrooms, status: :ok
  end

  def show
    chatroom = Chatroom.find_by!(conn_id: params[:id])
    render json: chatroom, status: :ok
  end

  def create
    chatroom = Chatroom.create!(chatroom_params)
    render json: chatroom, status: :created
  end

  def destroy
    chatroom = Chatroom.find_by!(conn_id: params[:id])
    chatroom.destroy
    head :no_content
  end

  def load_history
    chatroom = Chatroom.find_by!(conn_id: params[:id])
    messages = Message.all.where(chatroom_id: chatroom.id)
    render json: messages, status: :ok
  end

  private

  def chatroom_params
    params.permit(:title, :creator_id, :description).merge(conn_id: SecureRandom.alphanumeric)
  end
end
