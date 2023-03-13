class ChatChannel < ApplicationCable::Channel
  def subscribed
    # So this stream_from thing just streams whatever info from that specific channel, it has to match on frontend
    # You can use string interpolation to pass in params
    stop_all_streams
    stream_from "chat_#{params[:room]}"
  end

  def unsubscribed
    stop_all_streams
  end
end
