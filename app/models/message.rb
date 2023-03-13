class Message < ApplicationRecord
  def self.new_message(params)
    message = Message.create!(content: params[:content], user_id: params[:user_id])
    ActionCable.server.broadcast("chat_#{params[:room]}", message)
    return message
  end
end
