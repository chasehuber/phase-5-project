class MessagesController < ApplicationController
  def index
    messages = Message.all
    render json: messages, status: :ok
  end

  def create_message
    message = Message.new_message(params)
    render json: message, status: :created
  end
end
