class MessagesController < ApplicationController
  def index
    messages = Message.all
    render json: messages, status: :ok
  end

  def create
    Message.create(content: params[:message])
    ActionCable.server.broadcast('messages', { messages: Message.all })
  end
end
