class MessagesController < ApplicationController
  before_action :authorized
  def create
    message = Message.new_message(message_params)
    render json: message, status: :created
  end

  private

  def message_params
    params.permit(:content, :user_id, :chatroom_id, :room_id)
  end
end
