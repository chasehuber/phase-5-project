class Message < ApplicationRecord
  belongs_to :user
  belongs_to :chatroom

  validates :content, presence: true, length: { in: 1..1000 }

  def self.new_message(params)
    message = Message.create!(content: params[:content], user_id: params[:user_id], chatroom_id: params[:chatroom_id])
    ActionCable.server.broadcast("chat_#{params[:room_id]}", message)
    return message
  end
end
